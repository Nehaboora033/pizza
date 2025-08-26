import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const location = useLocation();

  // Pages where footer has a special background
  const specialFooterPages = ['/menu', '/offers'];
  const isSpecialFooter = specialFooterPages.includes(location.pathname);

  // Pages where header/footer should be hidden
  const noHeaderFooterRoutes = ["/cart/customize"];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {/* Header (hidden on certain routes) */}
      {!shouldHideHeaderFooter && <Header />}

      <div>
        <Outlet />
      </div>

      {/* Footer (hidden on certain routes) */}
      {!shouldHideHeaderFooter && <Footer customBg={isSpecialFooter} />}

      {/* ✅ Always show BackToTop */}
      <BackToTop />
    </>
  );
}

export default App;