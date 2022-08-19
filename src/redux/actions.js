/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../app';
import { updateBooks } from './reducer';

const loadBooks = createAsyncThunk(
  'loadBooks',
  async (_, thunkAPI) => {
    try {
      const userToken = JSON.parse(sessionStorage.getItem('user'));
      const response = await Api.get('home', {
        headers: {
          authorization: userToken.token,
        },
      });
      thunkAPI.dispatch(updateBooks(response.data.createdBooks));
    } catch (err) {
      console.log(err);
    }
  },
);

export default loadBooks;
