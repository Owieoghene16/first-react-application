import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../app';
import { loadBookSuccess } from './reducer';

export const loadBooks = createAsyncThunk(
  'loadBooks',
  async (_, thunkAPI) => {
    try {
      const response = await Api.get('home');
      thunkAPI.dispatch(loadBookSuccess(response.data.createdBooks));
    } catch (err) {
      console.log(err);
    }
  }
);
