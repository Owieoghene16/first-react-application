import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  token: '',
  errorMessage: '',
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadToken: (state, action) => {
      state.token = action.payload;
    },
    loadBookError(state, action) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    loadBookSuccess: (state, action) => {
      state.loading = false;
      state.errorMessage = null;
      state.books = action.payload;
    },
  },
})

export const { loadBookError, loadBookSuccess, loadToken } = bookSlice.actions;

export default bookSlice.reducer;
