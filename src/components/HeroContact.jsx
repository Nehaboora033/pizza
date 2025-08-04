import React from 'react'
import Description from './common/Description'
import SubHeading from './common/SubHeading'
import backgroundImage from '../assets/webp/contactheroimg.webp'

const HeroContact = () => {
    return (
        <div className="max-w-[1344px] px-3 mx-auto">
            <div
                className="relative flex justify-center items-center w-full min-h-[400px] bg-center bg-cover bg-no-repeat rounded-3xl after:content-[''] after:absolute after:inset-0 after:rounded-3xl after-img after:z-0 after-img"
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

export default HeroContact