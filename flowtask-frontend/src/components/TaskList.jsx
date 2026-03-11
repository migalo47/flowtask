import { useEffect, useState } from "react";
import { getTasksByUser, deleteTask } from "../api/tasks";
import TaskForm from "./TaskForm";

export default function TaskList({ userId }) {

  const [tasks,setTasks]=useState([]);
  const [taskToEdit,setTaskToEdit]=useState(null);

  useEffect(()=>{
    fetchTasks();
  },[]);

  const fetchTasks=async()=>{
    const data=await getTasksByUser(userId);
    setTasks(data);
  }

  const handleDelete=async(id)=>{
    await deleteTask(id);
    fetchTasks();
  }

  const getStatusColor=(status)=>{

    if(status==="TODO") return "bg-gray-200 text-gray-700";
    if(status==="IN_PROGRESS") return "bg-yellow-200 text-yellow-800";
    if(status==="DONE") return "bg-green-200 text-green-800";

  }

  return(

    <div>

      <TaskForm
        userId={userId}
        taskToEdit={taskToEdit}
        onSuccess={()=>{
          fetchTasks();
          setTaskToEdit(null);
        }}
      />

      <h2 className="text-2xl font-bold mb-6">
        Mis tareas
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {tasks.map(task=>(

          <div
            key={task.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center mb-2">

              <h3 className="text-lg font-semibold">
                {task.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}
              >
                {task.status}
              </span>

            </div>

            <p className="text-gray-600 mb-4">
              {task.description}
            </p>

            <div className="flex gap-3">

              <button
                onClick={()=>setTaskToEdit(task)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Editar
              </button>

              <button
                onClick={()=>handleDelete(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}