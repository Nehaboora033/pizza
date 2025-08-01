import React from 'react'
import FoodDelivery from './../components/FoodDelivery'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Delicious from '../components/Delicious'
import BestSellers from '../components/BestSellers'
import Menu from '../components/Menu'
import LimitedOffer from '../components/LimitedOffer'
import HowItsWork from '../components/HowItsWork'
import Testinomals from '../components/Testinomals'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs/>
      <Delicious/>
      <BestSellers/>
      <Menu/>
      <LimitedOffer/>
      <FoodDelivery />
      <HowItsWork/>
      <Testinomals/>
       <Gallery />
    </>
  )
}

export default Home