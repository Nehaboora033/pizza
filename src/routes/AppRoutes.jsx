import React from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import CustomePizza from '../pages/CustomePizza'
import Offers from '../pages/Offers'
import AboutUS from '../pages/AboutUS'
import PizzaDetail from '../components/PizzaDetail'
import App from '../App'


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
        path: 'customize',
        element: <CustomePizza />,
        children: [
          {
            path: 'pizza-detail',
            element:<PizzaDetail/>
          },
        ]
      },
      {
        path: 'offers',
        element: <Offers />
      },
      {
        path: 'about',
        element: <AboutUS />
      },
    ]
  }
])

export default AppRoutes