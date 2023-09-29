import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pet.markodev.me/',
  timeout: 5000,
});



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
    baseURL: "https://pet.markodev.me",
    timeout: 5000,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });


  
  nodeBackend.interceptors.request.use(
    config => {
      const access_token = localStorage.getItem('access_token');
  
      if (access_token)
        config.headers = {
          Authorization: `Bearer ${access_token}`,
          // Accept: 'application/json',

        };
  
      return config;
    },
    error => Promise.reject(error)
  );

