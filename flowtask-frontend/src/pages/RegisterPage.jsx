import { useState } from "react";
import { registerUser } from "../api/users";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {

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

    }catch(error){
      alert("Error creando usuario");
    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Crear cuenta
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
          >
            Crear cuenta
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Ya tienes cuenta?{" "}
          <Link to="/" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>

  )

}