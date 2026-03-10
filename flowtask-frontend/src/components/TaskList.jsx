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

      <h2>Mis tareas</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {tasks.map(task=>(
            <tr key={task.id}>

              <td>{task.title}</td>
              <td>{task.status}</td>

              <td>

                <button onClick={()=>setTaskToEdit(task)}>
                  Edit
                </button>

                <button onClick={()=>handleDelete(task.id)}>
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}