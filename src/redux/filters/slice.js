// src/redux/filters/slice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    setFilter(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
