import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const fetchChars = createAsyncThunk(
  'char/fetchChars',
  async (controller, thunkAPI) => {
    try {
      const { data } = await axios.get('/character', {
        signal: controller.signal,
      });

      return data.results;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
