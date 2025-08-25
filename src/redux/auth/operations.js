import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader, clearAuthHeader } from '../../shared/api';

export const register = createAsyncThunk('auth/register', async (cred, thunkAPI) => {
  try {
    const { data } = await api.post('/users/signup', cred);
    setAuthHeader(data.token);          // <— ÖNEMLİ
    return data;                        // { user, token }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (cred, thunkAPI) => {
  try {
    const { data } = await api.post('/users/login', cred);
    setAuthHeader(data.token);          // <— ÖNEMLİ
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) return thunkAPI.rejectWithValue('No token');

  try {
    setAuthHeader(token);               // <— ÖNEMLİ
    const { data } = await api.get('/users/current'); // { name, email }
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});
