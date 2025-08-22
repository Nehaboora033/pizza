import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const location = useLocation();
  const specialFooterPages = ['/menu', '/offers',]; //
  const isSpecialFooter = specialFooterPages.includes(location.pathname);
  const noHeaderRoutes = ["/cart/customize"];


  return (
    <>
      <ScrollToTop />
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <div>
        <Outlet />
      </div>
      <Footer customBg={isSpecialFooter} />
      <BackToTop />
    </>

  )
}

export default App
