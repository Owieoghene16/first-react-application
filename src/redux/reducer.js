/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  borrowedBook: [],
  returnedBook: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateBooks: (state, action) => {
      state.books = action.payload;
    },
    borrowBook(state, action) {
      state.borrowedBook = action.payload;
    },
    returnBook(state, action) {
      state.returnedBook = action.payload;
    },
  },
});

export const {
  updateBooks, borrowBook, returnBook,
} = bookSlice.actions;

export default bookSlice.reducer;
