import { nodeBackend } from './api';

class AuthService {
  
  getLoggedInUser = async data => await nodeBackend.post('/login/', data);

  registerUser = async data => await nodeBackend.post('/users/', data);
}
console.log("Debugging Axios Config:", nodeBackend.defaults);

export const authService = new AuthService();
