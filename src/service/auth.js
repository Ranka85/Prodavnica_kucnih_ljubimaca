import { axiosInstance } from './api';

class AuthService {
  
  getLoggedInUser = async data => await axiosInstance.post('login/', data);

  registerUser = async data => await axiosInstance.post('users/', data);
}

export const authService = new AuthService();
