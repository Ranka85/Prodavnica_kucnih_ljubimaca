import { AppLayout } from '../layout';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { ShopPage } from '../pages/shop';
import { WhoAreWePage } from '../pages/whoAreWe';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { CityPage } from '../pages/city';
import { PetPage } from '../pages/pets';
import { DogsPage } from '../pages/categories/dogs';
import { CatsPage } from '../pages/categories/cats';
import { FishPage } from '../pages/categories/fish';
import { BirdsPage } from '../pages/categories/birds';
import { RabbitPage } from '../pages/categories/rabbit';
import { PostNewAdPage } from '../pages/postNewAd';
import { UsersPage } from '../pages/users';
import { UserPets } from '../pages/userPets';

 const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.id ? <>{element}</> : <Navigate to="/login" />;
};


export const appRoutes = [
  {
    path: '',
    element:<AppLayout />,
    children: [
      {
        index:true,
        element: <HomePage />,
        exact: true,
      },
  
      {
        path: 'shop',
        children: [

          {path: '', element:<ShopPage/>},
          {path: 'dogs', element: <DogsPage/>},
          {path: 'cats', element: <CatsPage/>, name:"cats"},
          {path: 'birds', element: <BirdsPage/>},
          {path: 'fish', element: <FishPage/>},
          {path: 'rabbit', element: <RabbitPage/>},

        ]
      },

      { path: 'whoAreWe', element: <WhoAreWePage /> },
       { path: 'postNewAd', element:<PostNewAdPage/>/*<ProtectedRoute element={<PostNewAdPage />}/>*/},
       { path: 'city', element: <CityPage /> },
       { path: 'pet', element: <PetPage /> },
       { path: 'users', element: <UsersPage /> },
        { path: 'user/:id/userPets', element: <UserPets /> },

       { path: '*', element: <h1>404 Not found</h1> },
    
    ],
  },
  { path: 'register', element: <RegisterPage /> },
  { path: 'login', element: <LoginPage  /> },
  { path: '*', element: <h1>404 Not found</h1> },
 
];