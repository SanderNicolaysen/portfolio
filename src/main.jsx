import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/context/ThemeContext';
import './index.css';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
