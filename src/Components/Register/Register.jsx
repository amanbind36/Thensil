

import React, { useState } from 'react';
import Styles from './reg.module.css'
import { useNavigate } from  "react-router-dom"
const Register = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Registration successful!');
    navigate("/login");
  };

  return (
    <div style={{height:"100vh"}} className="registration-form">
      <h2>Registration Form</h2>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
