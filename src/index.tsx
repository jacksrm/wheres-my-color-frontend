import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import { LoginProvider } from 'context/LoginProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
