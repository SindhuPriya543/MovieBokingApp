// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
   //baseURL: 'http://localhost:5000',  // Replace with your API base URL
  baseURL: 'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14',
  timeout: 10000,  // Optional timeout
});

export default axiosInstance;
