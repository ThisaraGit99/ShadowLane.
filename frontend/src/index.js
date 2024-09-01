import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this file exists or remove this line if not used
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
