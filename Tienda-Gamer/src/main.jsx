import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './route.jsx'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Navbar/>
      <BrowserRouter>
  
        <AppRoutes/>
      </BrowserRouter>
  </StrictMode>,
)
