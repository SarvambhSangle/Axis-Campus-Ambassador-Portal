import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Correct path to your App.jsx
import './index.css'; // Or whatever your global CSS file is

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);