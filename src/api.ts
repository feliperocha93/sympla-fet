import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-code-challenger.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
