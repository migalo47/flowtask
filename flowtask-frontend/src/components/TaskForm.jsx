import { useState, useEffect } from "react";
import { createTask, updateTask } from "../api/tasks";
import { getUsers } from "../api/users";

export default function TaskForm({ taskToEdit, onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  // Cargar usuarios para el select
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      if (data.length > 0 && !userId) setUserId(data[0].id);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Si recibimos tarea para editar, rellenamos el formulario
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setUserId(taskToEdit.user.id);
    } else {
      setTitle("");
      setDescription("");
      setStatus("TODO");
      if (users.length > 0) setUserId(users[0].id);
    }
  }, [taskToEdit, users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !userId) return alert("Todos los campos son obligatorios");

    const taskData = { title, description, status, userId };

    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, taskData);
      } else {
        await createTask(taskData);
      }
      onSuccess(); // refrescar lista en TaskList
      // limpiar formulario si es nueva tarea
      if (!taskToEdit) {
        setTitle("");
        setDescription("");
        setStatus("TODO");
        setUserId(users.length > 0 ? users[0].id : "");
      }
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Error al guardar la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{taskToEdit ? "Editar Tarea" : "Crear Tarea"}</h2>
      <div className="mb-2">
        <label className="block mb-1">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-full p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Estado</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border w-full p-2 rounded"
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Usuario</label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border w-full p-2 rounded"
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {taskToEdit ? "Actualizar Tarea" : "Crear Tarea"}
      </button>
    </form>
  );
}