import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.userId ? <>{element}</> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.userId ? <Navigate to="/" /> : <>{element}</>;
};