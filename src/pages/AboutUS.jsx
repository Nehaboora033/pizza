import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import AboutHero from '../components/AboutHero'
import OurTeam from '../components/OurTeam'
import WhyChooseUs from '../components/WhyChooseUs'
import Craving from '../components/common/Craving'
// import Login from '../components/common/Login'



const AboutUS = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <OurTeam />
      <WhyChooseUs />
      <Craving />
      {/* <Login /> */}

    </div>
  )
}

export default AboutUS