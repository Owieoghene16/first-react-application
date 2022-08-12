import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './reducer.jsx';

const store = configureStore({
  reducer: {
    database: bookReducer,
  },
});

export default store;
