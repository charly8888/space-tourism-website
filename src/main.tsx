import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { NavbarProvider } from '../context/navbar/navbarContext';


ReactDOM.render(
    <React.StrictMode>
      <NavbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavbarProvider>
    </React.StrictMode>,
  document.getElementById('root')
)
