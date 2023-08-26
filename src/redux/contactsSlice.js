import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const id = state.findIndex(contact => contact.id === action.payload);
      state.splice(id, 1);
    },
    replaceContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, replaceContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
