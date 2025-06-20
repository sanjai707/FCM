/* import React, {useState} from "react";
import "./Login.css";
 function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin =(e)=>{
        e.preventDefault();
        if(username === "admin" && password === "admin123")
        {
            alert("Login successful!");

        }
        else 
        {
            alert("Invalid credentials!");
        }
    };
    return(
        <section className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login to FCM</h2>
                <input type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required/>
                <input type="text"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
                <button type="submit">Login</button>
                <p >Create account ?</p>
            </form>
        </section>
    )
 }
 export default Login; */

 import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      login(user);
      navigate('/categories'); // redirect after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p className='reg-log' onClick={()=>{navigate("/register")}}>Create an account ?</p>
    </div>
  );
}
export default Login;
