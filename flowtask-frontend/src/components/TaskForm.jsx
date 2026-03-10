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

    <form onSubmit={handleSubmit}>

      <h3>{taskToEdit?"Editar":"Nueva tarea"}</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <br/>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <br/>

      <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>

      <br/>

      <button type="submit">
        {taskToEdit?"Update":"Create"}
      </button>

    </form>

  )

}