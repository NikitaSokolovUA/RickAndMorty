import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGoogleAuth = createAsyncThunk(
  'auth/fetchGoogleAuth',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credentials.accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${credentials.accessToken}`,
            Accept: 'application/json',
          },
        }
      );

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
