// import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from '../redux/contactsSlice';

// axios.defaults.baseURL = 'hhttps://64e9483599cf45b15fe0912b.mockapi.io/api/v1';

// export const fetchContacts = () => async dispatch => {
//   console.log('OLOLOLOLOLO');
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/contacts');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64e9483599cf45b15fe0912b.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`contacts/${contactId}`);
      return contactId; // Return the deleted contact ID
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
