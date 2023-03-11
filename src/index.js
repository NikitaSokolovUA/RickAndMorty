import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1081878783536-fgbf5jts2kdubcc51mefte2spdfln8g8.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
