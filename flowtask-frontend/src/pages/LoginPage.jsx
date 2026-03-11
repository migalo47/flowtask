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

    }catch{
      alert("Error en login");
    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          FlowTask
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Registrarse
          </Link>
        </p>

      </div>

    </div>

  )

}