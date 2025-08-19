import React from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Offers from '../pages/Offers'
import AboutUS from '../pages/AboutUS'
import App from '../App'
import Gallery from '../components/Gallery'
import Testinomals from '../components/Testinomals'
import ContactUs from '../pages/ContactUs'
import Terms from '../components/Terms'
import Policy from '../components/Policy'
import Cart from '../pages/Cart'



const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'offers',
        element: <Offers />
      },
      {
        path: 'about',
        element: <AboutUS />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'testinomial',
        element: <Testinomals />
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'policy',
        element: <Policy />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  }
])

export default AppRoutes