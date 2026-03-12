import { useState, useContext } from "react";
import { getUserByEmail } from "../api/users";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogin=async(e)=>{
    e.preventDefault();

    try{

      const user=await getUserByEmail(email);

      if(!user){
        alert("Usuario no encontrado");
        return;
      }

      login(user);
      navigate("/tasks");

    }catch(error){
      alert("Error en login");
    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white w-[380px] p-10 rounded-2xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          FlowTask
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Organiza tus tareas fácilmente
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          <button
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
          >
            Iniciar sesión
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          No tienes cuenta?{" "}
          <Link to="/register" className="text-purple-600 font-semibold">
            Crear cuenta
          </Link>
        </p>

      </div>

    </div>

  )
}