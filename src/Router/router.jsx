import { AppLayout } from '../layout';
import { ShopPage } from '../pages/shop';
import { WhoAreWePage } from '../pages/whoAreWe';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { SearchPage } from '../pages/search';

import { ProtectedRoute, PublicRoute } from './Routes';

export const appRoutes = [
  {
    path: '',
    element: <PublicRoute element={<AppLayout />} />,
    children: [
      {
        index: true,
        element: <HomePage />,
        exact: true,
      },
  
      {
        path: 'shop', element: <PublicRoute element={<ShopPage />}  /> },
      { path: 'whoAreWe', element: <WhoAreWePage /> },
      {path: 'search', element: <SearchPage/>},
      { path: '*', element: <h1>404 Not found</h1> },
    ],
  },
  { path: 'login', element: <PublicRoute element={<LoginPage />} /> },
  { path: 'register', element: <PublicRoute element={<RegisterPage />} /> },
  { path: '*', element: <h1>404 Not found</h1> },
];