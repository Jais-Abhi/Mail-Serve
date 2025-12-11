import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


//for development change also in backend/index.js
// export const server = "http://localhost:8000"

//for production change also in backend/index.js
export const server = "https://mail-serve-backend.onrender.com/"



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
