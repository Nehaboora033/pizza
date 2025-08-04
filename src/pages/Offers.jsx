import React from 'react'
import Delicious from '../components/Delicious'
import FamousDishes from '../components/FamousDishes'
import OfferHero from '../components/OfferHero'
import OurClient from '../components/OurClient'
import TopBrand from '../components/TopBrand'
import TopRestaurant from '../components/TopRestaurant'
import WhatPizza from '../components/WhatPizza'

const Offers = () => {
  return (
    <>
      <OfferHero />
      <WhatPizza />
      <TopBrand />
      <TopRestaurant />
      <FamousDishes />
      <Delicious />
      <OurClient />
    </>
  )
}

export default Offers