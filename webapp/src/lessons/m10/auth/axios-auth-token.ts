import axios, { InternalAxiosRequestConfig } from 'axios'

export const setAuthorizationHeader = (token: string) => {
  const includeToken = (config: InternalAxiosRequestConfig) => {
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  }

  const interceptor = axios.interceptors.request.use(includeToken);

  return () => {
    axios.interceptors.request.eject(interceptor);
  }
}
