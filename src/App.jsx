import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/common/Footer'
import Craving from './components/common/Craving'

function App() {
  const location = useLocation();

  const specialFooterPages = ['/menu', '/offers',]; //
  const isSpecialFooter = specialFooterPages.includes(location.pathname);

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer customBg={isSpecialFooter} />
    </>

  )
}

export default App
