import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 15000,
});
