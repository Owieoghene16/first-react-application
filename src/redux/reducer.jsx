import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  user: '',
  isAuthenticated: false,
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    authenticateUser(state, action) {
      state.isAuthenticated = action.payload;
    },
    updateBooks: (state, action) => {
      state.books = action.payload;
    },
  },
})

export const { addUser, authenticateUser, updateBooks } = bookSlice.actions;

export default bookSlice.reducer;
