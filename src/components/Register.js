import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find(user => user.username === username);
    if (exists) {
      alert('User already exists!');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      navigate('/login');
    }
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p className='reg-log' onClick={()=>{navigate("/login")}}>Already have an account ?</p>
    </div>
  );
}
export default Register;
