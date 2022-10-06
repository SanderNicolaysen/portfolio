import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAnalytics } from 'firebase/analytics';
import App from './App';
import { ThemeProvider } from './components/context/ThemeContext';
import './index.css';
import app from './firebaseConfig';

getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
