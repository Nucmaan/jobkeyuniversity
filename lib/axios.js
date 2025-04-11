import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendjobkey.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false,
  timeout: 30000
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.baseURL + config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      console.error('Network Error:', error.message);
    } else if (error.response) {
      console.error('Response Error:', error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api; 