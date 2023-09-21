import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { appRoutes } from './Router/router';
import 'bootstrap/dist/css/bootstrap.min.css';


// import { Footer } from './components/Footer';
const App = () => {
  const router = createBrowserRouter(appRoutes);

  return (
    <UserProvider>
      <RouterProvider router={router} />
      {/* <Footer/> */}

    </UserProvider>
    
  );
};

export default App;