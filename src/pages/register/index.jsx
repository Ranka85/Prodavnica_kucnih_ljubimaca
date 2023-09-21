import React, { useState } from 'react';
import "./registerStyle.css"


export const RegisterPage=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form data submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='registration-container'>
      <div className='border-div-reg'>
      <h2 className='text-register'>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='registration-flex'>
          <label htmlFor="name" className='text-reg'>Name</label>
          <input
            className='registration-rounded'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className='registration-flex'>
          <label htmlFor="email" className='text-reg'>Email</label>
          <input
            className='registration-rounded'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className='registration-flex'>
          <label htmlFor="password" className='text-reg'>Password</label>
          <input
          className='registration-rounded'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" className='registration-submit-block '>Register</button>
      </form>
      </div>
    </div>
  );
}

