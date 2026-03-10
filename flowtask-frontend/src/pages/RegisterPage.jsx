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

    <div>

      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/>

        <input
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

        <button type="submit">Register</button>

      </form>

      <p>
        Ya tienes cuenta? <Link to="/">Login</Link>
      </p>

    </div>

  )

}