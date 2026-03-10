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
    <div>

      <h1>Hola {user.username}</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      <TaskList userId={user.id} />

    </div>
  );
}