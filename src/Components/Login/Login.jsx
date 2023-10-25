import React, { useState } from 'react';
import { useNavigate } from  "react-router-dom"
import Styles from "./login.module.css"
const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password match local storage data
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && formData.email === storedUser.email && formData.password === storedUser.password) {
    //   onLogin(true);
    navigate("/home");
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div  style={{height:"100vh"}} className="login-form">
      <h2>Login</h2>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
