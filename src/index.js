import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import './index.css'
import { MainContextProvider } from './contexts/MainContext';

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
