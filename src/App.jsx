import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'

function App () {

  return (
    <>
          <Header />
          <div>
              <Outlet/>
          </div>
          <Footer/>
    </>

  )
}

export default App
