import { useState, useContext } from 'react';
import { authService } from '../../service/auth';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './registerstyle.css';

const { registerUser } = authService;

export const RegisterPage = () => {
  const { handleUserLogin } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const body = JSON.stringify(formData);

      const response = await registerUser(body);
      handleUserLogin(response.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" className='registration-submit-block '>Register</button>
      </form>
      </div>
    </div>
  );
}

