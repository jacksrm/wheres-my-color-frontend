import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Initial} from './pages/Initial';
import {Registration} from './pages/Registration';
import {Login} from './pages/Login';
import {Account} from './pages/Account';
import {Home} from './pages/Home';
import {MyHome} from './pages/My Home';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
