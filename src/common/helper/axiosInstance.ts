import axios from 'axios';
import {getFromStorage} from './storage';
import { store } from '../../redux/store';

// const BASE_URL = 'https://restorant-app100.onrender.com/api/v1';
const BASE_URL = 'https://server-restorant-app-v1-production.up.railway.app/api/v1';
// const BASE_URL = 'http://localhost:5000/api/v1';

export const getTokenFromStore = () =>{
  const auth = store.getState().auth;
  if(auth && auth?.token){
    return auth?.token;
  }
}

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const axiosClientWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getTokenFromStore()}`,
  },
});
