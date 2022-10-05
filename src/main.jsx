import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './components/context/ThemeContext'
import './index.css'
import { app } from './firebaseConfig'
import { getAnalytics } from 'firebase/analytics'

const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
