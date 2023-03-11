import { fetchChars, fetchCharsByName } from './charOperation';

const { createSlice } = require('@reduxjs/toolkit');

const charSlice = createSlice({
  name: 'char',
  initialState: {
    charList: [],
    felteredCharList: [],
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
    [fetchCharsByName.pending](state) {
      state.isLoading = true;
    },
    [fetchCharsByName.fulfilled](state, action) {
      state.charList = action.payload;
      state.isLoading = false;
    },

    [fetchCharsByName.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const charReducer = charSlice.reducer;
