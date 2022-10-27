import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'https://api.honf.ru/v1' : `${process.env.API_URL}`,
  withCredentials: true,
});
