import { configureStore } from '@reduxjs/toolkit';
import { charReducer } from './charSlice/charSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './authSlice/authSlice';

const persistConfig = {
  key: 'char',
  storage,
  whitelist: ['searchValue', 'currentPage'],
};
const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token'],
};

export const store = configureStore({
  reducer: {
    char: persistReducer(persistConfig, charReducer),
    auth: persistReducer(persistAuthConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
