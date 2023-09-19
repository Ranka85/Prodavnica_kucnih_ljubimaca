import { useContext, useState } from 'react';
import { authService } from '../../service/auth';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

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
      const body = JSON.stringify({ username, password });

      const response = await getLoggedInUser(body);
      handleUserLogin(response.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl text-green-500 text-center">Login page</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 max-w-lg mx-auto mt-4">
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
          className="block px-2 py-1 bg-green-500 rounded-sm text-white mx-auto"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};
