import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../app';
import { updateBooks } from './reducer';

export const loadBooks = createAsyncThunk(
  'loadBooks',
  async (_, thunkAPI) => {
    try {
      const userToken = JSON.parse(sessionStorage.getItem('user'));
      const response = await Api.get('home', {
        headers: {
          'authorization': userToken.token
        }
      });
      thunkAPI.dispatch(updateBooks(response.data.createdBooks));
    } catch (err) {
      console.log(err);
    }
  }
);
