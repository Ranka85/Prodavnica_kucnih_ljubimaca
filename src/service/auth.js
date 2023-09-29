import { nodeBackend } from './api';

class AuthService {
  
  getLoggedInUser = async data => await nodeBackend.post('/login/', data);

  registerUser = async data => await nodeBackend.post('/users/', data);
}

export const authService = new AuthService();
