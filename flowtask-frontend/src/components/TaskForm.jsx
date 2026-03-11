import { useState, useEffect } from "react";
import { createTask, updateTask } from "../api/tasks";

export default function TaskForm({ userId, taskToEdit, onSuccess }) {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [status,setStatus]=useState("TODO");

  useEffect(()=>{
    if(taskToEdit){
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    }
  },[taskToEdit]);

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const taskData={
      title,
      description,
      status,
      userId
    };

    if(taskToEdit){
      await updateTask(taskToEdit.id,taskData);
    }else{
      await createTask(taskData);
    }

    setTitle("");
    setDescription("");
    setStatus("TODO");

    onSuccess();
  }

  return(

    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl shadow mb-8 space-y-4"
    >

      <h3 className="text-xl font-semibold">
        {taskToEdit ? "Editar tarea" : "Nueva tarea"}
      </h3>

      <input
        placeholder="Título"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        className="w-full border rounded-lg p-2"
      >
        <option value="TODO">Pendiente</option>
        <option value="IN_PROGRESS">En progreso</option>
        <option value="DONE">Completada</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {taskToEdit ? "Actualizar" : "Crear tarea"}
      </button>

    </form>

  )

}