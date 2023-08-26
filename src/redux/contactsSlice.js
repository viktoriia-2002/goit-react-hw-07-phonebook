// // import { createSlice } from '@reduxjs/toolkit';

// // const contactsSlice = createSlice({
// //   name: 'contacts',
// //   initialState: {
// //     contacts: [],
// //     isLoading: false,
// //     error: null,
// //   },
// //   reducers: {
// //     addContact(state, action) {
// //       state.push(action.payload);
// //     },
// //     deleteContact(state, action) {
// //       const id = state.findIndex(contact => contact.id === action.payload);
// //       state.splice(id, 1);
// //     },
// //     replaceContacts(state, action) {
// //       state.contacts = action.payload;
// //     },
// //   },
// // });

// // export const { addContact, deleteContact, replaceContacts } =
// //   contactsSlice.actions;
// // export const contactsReducer = contactsSlice.reducer;

// // const contactsSlice = {
// //   name: 'contacts',
// //   initialState: {
// //     items: [],
// //     isLoading: false,
// //     error: null,
// //   },
// //   reducers: {
// //     fetchingInProgress(state) {
// //       state.isLoading = true;
// //     },
// //     fetchingSuccess(state, action) {
// //       state.isLoading = false;
// //       state.error = null;
// //       state.items = action.payload;
// //     },
// //     fetchingError(state, action) {
// //       state.isLoading = false;
// //       state.error = action.payload;
// //     },
// //   },
// // };

// // export const { fetchingInProgress, fetchingSuccess, fetchingError } =
// //   contactsSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
