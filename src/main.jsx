import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import { CartProvider } from './context/CartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={AppRoutes} />
    </CartProvider>
  </StrictMode>
)
