import { apiUrl } from '@/config';
import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/session`, credentials);

    if (response.status === 200) {
        const cookies = document.cookie.split(';'); // Access cookies from document.cookie
  
        for (const cookie of cookies) {
          const [key, value] = cookie.trim().split('=');
          if (key === 'accessToken') {
            // Access token found
            return value;
          }
        }
      } else {
        throw new Error('Login failed');
      }
  } catch (error) {
    console.error(error);
    return false;
  }
};