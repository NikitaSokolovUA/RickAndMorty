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

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCharsByName = createAsyncThunk(
  'char/fetchCharByName',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.get(`/character/?name=${credential}`);

      if (data) {
        return data.results;
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCharsByPage = createAsyncThunk(
  'char/fetchCharByPage',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.get(`/character/?page=${credential.page}`, {
        signal: credential.controller.signal,
      });

      return data.results;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
