import axios, { AxiosInstance } from 'axios';

 const api: AxiosInstance  = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
})

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('@TOKEN');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   });

  export default api