import axios from 'axios';

const apiClient = axios.create({
  // INFO: This is the base URL for the API
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
