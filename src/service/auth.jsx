import { nodeBackend } from './api';

class AuthService {
  getLoggedInUser = async data => await nodeBackend.post('/login', data);
}

export const authService = new AuthService();