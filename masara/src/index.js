// src/index.js
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client'; 

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';



const container = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(container); // Use createRoot instead of render
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

