import { configureStore } from '@reduxjs/toolkit';
import { charReducer } from './charSlice/charSlice';

export const store = configureStore({
  reducer: {
    char: charReducer,
  },
});
