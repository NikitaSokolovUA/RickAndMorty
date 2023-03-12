import { fetchGoogleAuth } from './authOperations';
const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    access_token: '',
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    authLogin(state, action) {
      state.access_token = action.payload.access_token;
    },
    authLogout(state) {
      state.name = '';
      state.email = '';
      state.access_token = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchGoogleAuth.pending](state) {
      state.isLoading = true;
    },
    [fetchGoogleAuth.fulfilled](state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoading = false;
      state.isLoggedIn = true;
    },

    [fetchGoogleAuth.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
