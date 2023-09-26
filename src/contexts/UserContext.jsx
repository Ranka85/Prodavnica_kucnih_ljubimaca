import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
export const UserContext = createContext(null);



const { Provider } = UserContext;

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(
    localStorage.getItem('access_token')
      ? jwtDecode(localStorage.getItem('access_token'))
      : null
  );

  const isUserLogedIn = () => {
     return localStorage.getItem('access_token')? true: false
  };

  const handleUserLogin = token => {
    const userObject = jwtDecode(token);

    setUser(userObject);
    localStorage.setItem('access_token', token);

  };

  const handlerUserLogout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };

  return (
    <Provider value={{ user, handleUserLogin, handlerUserLogout }}>
      {children}
    </Provider>
  );
};