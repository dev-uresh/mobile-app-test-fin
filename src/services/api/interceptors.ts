import { httpClient } from './httpClient';

httpClient.interceptors.request.use((config) => config);
httpClient.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default httpClient;
