import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

export default function TasksPage() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (

    <div className="min-h-screen">

      <div className="bg-white shadow-md p-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          FlowTask
        </h1>

        <div className="flex items-center gap-4">

          <span className="text-gray-600">
            Hola {user.username}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-10">

        <TaskList userId={user.id} />

      </div>

    </div>

  )
}