// src/index.js
import React from 'react';
import { createRoot } from 'react-dom';
import './components/index.css'; // Adjust the path accordingly
import App from './components/App'; // Adjust the path accordingly
import reportWebVitals from './components/reportWebVitals'; // Adjust the path accordingly

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

