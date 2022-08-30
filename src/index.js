import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter> <App /> </BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router, 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

