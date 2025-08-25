// src/redux/contacts/selectors.js
import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter?.trim()) return contacts;
    const q = filter.trim().toLowerCase();
    return contacts.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        (c.number && c.number.toLowerCase().includes(q)) // Ekstra: numaraya göre de filtre
    );
  }
);

export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
