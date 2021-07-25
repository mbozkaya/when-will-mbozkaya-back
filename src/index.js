import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
