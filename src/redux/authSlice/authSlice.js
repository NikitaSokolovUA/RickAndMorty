const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    access_token: '',
  },
  reducers: {
    authLogin(state, action) {
      state.access_token = action.payload.access_token;
    },
  },
});

export const { authLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
