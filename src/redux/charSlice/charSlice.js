import { fetchChars } from './charOperation';

const { createSlice } = require('@reduxjs/toolkit');

const charSlice = createSlice({
  name: 'char',
  initialState: {
    charList: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchChars.pending](state) {
      state.isLoading = true;
    },
    [fetchChars.fulfilled](state, action) {
      state.charList = action.payload;
      state.isLoading = false;
    },

    [fetchChars.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const charReducer = charSlice.reducer;
