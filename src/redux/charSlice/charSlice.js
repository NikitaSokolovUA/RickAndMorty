import {
  fetchChars,
  fetchCharsByName,
  fetchCharsByPage,
} from './charOperation';

const { createSlice } = require('@reduxjs/toolkit');

const charSlice = createSlice({
  name: 'char',
  initialState: {
    charList: [],
    info: {
      pages: 0,
    },
    currentPage: null,
    felteredCharList: [],
    isLoading: false,
  },
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchChars.pending](state) {
      state.isLoading = true;
    },
    [fetchChars.fulfilled](state, action) {
      if (action.payload) {
        state.charList = action.payload.results;
        state.info.pages = action.payload.info.pages;
        state.isLoading = false;
      }
    },

    [fetchChars.rejected](state) {
      state.isLoading = false;
    },
    [fetchCharsByName.pending](state) {
      state.isLoading = true;
    },
    [fetchCharsByName.fulfilled](state, action) {
      if (action.payload) {
        state.charList = action.payload.results;
        state.info.pages = action.payload.info.pages;
        state.isLoading = false;
      }
    },

    [fetchCharsByName.rejected](state) {
      state.isLoading = false;
    },
    [fetchCharsByPage.pending](state) {
      state.isLoading = true;
    },
    [fetchCharsByPage.fulfilled](state, action) {
      state.charList = action.payload;
      state.isLoading = false;
    },

    [fetchCharsByPage.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const { changePage } = charSlice.actions;
export const charReducer = charSlice.reducer;
