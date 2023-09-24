import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/pet_type_filter/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    // "ngrok-skip-browser-warning": true,
    // 'Accept': 'application/json'
  },
});

export default axiosInstance;


axiosInstance.interceptors.request.use(
  (request) => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', JSON.stringify(response, null, 2));
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);



export const nodeBackend = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    timeout: 5000,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  
  nodeBackend.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
  
      if (token)
        config.headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        };
  
      return config;
    },
    error => Promise.reject(error)
  );

