import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pet.markodev.me/',
  timeout: 5000,
  withCredentials: false
});



axiosInstance.interceptors.request.use(
  config => {
    const access_token = localStorage.getItem('access_token');
    config.headers = {
      Accept: 'application/json',
    }
    if (access_token)
      config.headers = {
        Authorization: `Bearer ${access_token}`,
    
      };

    return config;
  },
  (request) => {
    return request;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(


  (response) => {
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);



