import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import Craving from './components/common/Craving'

function App () {

  return (
    <>
          <Header />
          <div>
              <Outlet/>
          </div>
          <Craving/>
          <Footer/>
    </>

  )
}

export default App
