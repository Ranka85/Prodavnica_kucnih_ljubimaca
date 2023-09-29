import { useContext, useState } from 'react';
import { authService } from '../../service/auth';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './loginstyle.css';
const { getLoggedInUser } = authService;

export const LoginPage = () => {
  const { handleUserLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, setState) => {
    const {
      target: { value },
    } = event;

    setState(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      
      const body = new FormData;
      body.append("username", username)
      body.append("password", password)

      const response = await getLoggedInUser(body);
      handleUserLogin(response.data.access_token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
   <div className="login-container">
    <div className="border-div">
      <h1 className="text-login">Login page</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="rounded-sm px-2"
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={event => handleInputChange(event, setUsername)}
          />
          <input
            className="rounded-sm px-2"
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={event => handleInputChange(event, setPassword)}
          />
        </div>
        <button 
          className="submit-block"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="not-reg">
      <p>Not registered yet?</p>
      <Link to="/register/" className='reg-here'>Register here!</Link>

      </div>
           
      </div>

      </div>
    </>
  );
};
