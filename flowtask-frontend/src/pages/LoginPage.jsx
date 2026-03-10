import { useState, useContext } from "react";
import { getUserByEmail } from "../api/users";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const user = await getUserByEmail(email);

      if (!user) {
        alert("Usuario no encontrado");
        return;
      }

      login(user);

      navigate("/tasks");

    } catch (error) {
      alert("Error en login");
    }
  };

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/>

        <button type="submit">Login</button>

      </form>

      <p>
        No tienes cuenta? <Link to="/register">Registrarse</Link>
      </p>

    </div>
  );
}