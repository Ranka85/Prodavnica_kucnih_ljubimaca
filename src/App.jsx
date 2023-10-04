import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { appRoutes } from './Router/router';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const router = createBrowserRouter(appRoutes);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    
  );
};

export default App;