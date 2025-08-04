import React from 'react'
import backgroundImage from '../assets/webp/contactheroimg.webp'
import SubHeading from '../components/common/SubHeading'
import Description from '../components/common/Description'

const ContactUs = () => {
  return (
    <div className="max-w-[1344px] px-3 mx-auto">
      <div
        className="relative justify-center flex items-center w-full min-h-[400px] bg-center bg-cover bg-no-repeat rounded-3xl
          after:content-[''] after:absolute after:inset-0 after:rounded-3xl after-img after:z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <SubHeading className="text-center mb-4 text-white" text="We are Here to Help You" />
          <Description
            className="text-center max-w-[753px] mx-auto text-white w-full"
            text="Have a question or need help? Fill out the form or reach out to us directly. Our team is available 24/7 and typically replies within a few hours."
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs