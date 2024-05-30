import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Components/contexts/AuthContext.jsx'
import { AppProviderContent } from './Components/contexts/contentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <AppProviderContent>
    <App />
    </AppProviderContent>
    </AppProvider>
  </React.StrictMode>,
)
