import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global/', // dev/prod aynı
});

// Token helpers
export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};
