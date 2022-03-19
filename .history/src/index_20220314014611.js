import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TokenStorage from './db/token';
import { AuthErrorEventBus } from './context/AuthContext';
import HttpClient from './network/http';

const baseURL = 'http://localhost:8080';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
