import { useState } from "react";
import { registerUser } from "../api/users";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage(){

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  const handleRegister=async(e)=>{
    e.preventDefault();

    try{

      await registerUser({
        username,
        email,
        password
      });

      alert("Usuario creado");

      navigate("/");

    }catch{
      alert("Error creando usuario");
    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Crear cuenta
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full border rounded-lg p-2"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-lg p-2"
          />

          <button
            className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Ya tienes cuenta?{" "}
          <Link to="/" className="text-purple-500">
            Login
          </Link>
        </p>

      </div>

    </div>

  )

}