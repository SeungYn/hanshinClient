import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as fontawesome from '@fortawesome/free-solid-svg-icons';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App fontawesome={fontawesome} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
