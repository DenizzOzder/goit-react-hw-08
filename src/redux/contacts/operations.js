import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../shared/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/contacts'); // <— api
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await api.post('/contacts', contact); // <— api
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await api.delete(`/contacts/${id}`); // <— api
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
  }
});

export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async ({ id, update }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/contacts/${id}`, update); // örn: { name } veya { number }
      return data; // güncellenmiş contact objesi
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
    }
  }
);
