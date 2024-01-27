import axios from 'axios';
import {getFromStorage} from './storage';

const BASE_URL = 'https://restorant-app100.onrender.com/api/v1';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const axiosClientWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getFromStorage('token')}`,
  },
});
