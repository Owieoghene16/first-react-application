/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../app';
import { updateBooks, borrowBook, returnBook } from './reducer';

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

export const loadborrowedBooks = createAsyncThunk(
  'loadborrowedBooks',
  async (_, thunkAPI) => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const response = await Api.get('/borrow', {
        headers: {
          authorization: user.token,
        },
      });
      thunkAPI.dispatch(borrowBook(response.data.borrowList));
    } catch (err) {
      console.log(err);
    }
  },
);

export const loadreturnedBooks = createAsyncThunk(
  'loadreturnedBooks',
  async (_, thunkAPI) => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const response = await Api.get('/return', {
        headers: {
          authorization: user.token,
        },
      });
      thunkAPI.dispatch(returnBook(response.data.returnList));
    } catch (err) {
      console.log(err);
    }
  },
);

export default loadBooks;
