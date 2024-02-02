import axios from 'axios';
import {getFromStorage} from './storage';
import {store} from '../../redux/store';

// const BASE_URL = 'https://restorant-app100.onrender.com/api/v1';
const BASE_URL =
  'https://server-restorant-app-v1-production.up.railway.app/api/v1';
// const BASE_URL = 'http://localhost:5000/api/v1';

export const getTokenFromStore = () => {
  const auth = store!.getState()!.auth;
  if (auth && auth!.token) {
    return auth?.token;
  }
};

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const axiosClientWithHeaders = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor
axiosClientWithHeaders.interceptors.request.use(
  config => {
    const accessToken = store.getState()?.auth?.token;
    if (accessToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    // Handle request errors here

    return Promise.reject(error);
  },
);
