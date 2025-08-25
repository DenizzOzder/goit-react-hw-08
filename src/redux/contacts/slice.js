// src/redux/contacts/slice.js
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, patchContact } from './operations';
import { logOut } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(c => c.id !== payload);
      })
      .addCase(patchContact?.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex(c => c.id === payload.id);
        if (idx !== -1) state.items[idx] = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, patchContact?.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, patchContact?.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload ?? 'Error';
        }
      ),
});

export default contactsSlice.reducer;
