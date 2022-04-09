import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MarcadorProvider } from '../context/MarcadorProvider';

ReactDOM.render(
  <MarcadorProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MarcadorProvider>,
  document.getElementById('root')
)
