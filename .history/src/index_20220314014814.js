import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TokenStorage from './db/token';
import { AuthErrorEventBus, AuthProvider } from './context/AuthContext';
import HttpClient from './network/http';
import AuthService from './service/auth';
import PackageService from './service/package';

const baseURL = 'http://localhost:8080';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);
const packageService = new PackageService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App packageService={packageService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
