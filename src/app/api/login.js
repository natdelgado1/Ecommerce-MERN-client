import { apiUrl } from '@/config';
import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/session`, credentials);

    if (response.status === 200) {
       const data = await response.data;
       return data;
      } else {
        throw new Error('Login failed');
      }
  } catch (error) {
    console.error(error);
    return false;
  }
};