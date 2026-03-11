import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

export default function TasksPage(){

  const {user,logout}=useContext(AuthContext);
  const navigate=useNavigate();

  if(!user){
    navigate("/");
    return null;
  }

  const handleLogout=()=>{
    logout();
    navigate("/");
  }

  return(

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-bold">
            Hola {user.username}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <TaskList userId={user.id}/>

        </div>

      </div>

    </div>

  )

}