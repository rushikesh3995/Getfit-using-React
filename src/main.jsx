import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
import SubscriptionProvider from "./context/SubscriptionContext";
import App from './App.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
 <SubscriptionProvider>
  <App />
 </SubscriptionProvider>
   
 
  </BrowserRouter>
)
