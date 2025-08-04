import React from 'react'
import ContactCards from '../components/ContactCards'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import HeroContact from '../components/HeroContact'


const ContactUs = () => {
  return (
    <>
      <HeroContact />
      <ContactCards />
      <ContactForm />
      <Map />
    </>
  )
}

export default ContactUs