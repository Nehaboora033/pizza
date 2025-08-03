import React from 'react'
import backgroundImage from '../assets/webp/aboutherobg.webp'
import SubHeading from './common/SubHeading'
import Description from './common/Description'

const AboutHero = () => {
    return (
        <div className='max-w-[1344px] px-3 mx-auto pb-[100px]'>
            <div className='max-w-[1320px] mt-6  h-[480px] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat rounded-3xl' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div>
                    <SubHeading className={'max-w-[753px] w-full mx-auto text-white'} text={'Food That Brings People Together'} />
                    <Description className={'text-[#D1D2D3] mt-4 max-w-[753px] w-full text-center'} text={'At Pizza Nest, we go beyond just delivering meals — we connect you with your favorite flavors, trusted restaurants, and unbeatable convenience. Every order reflects our love for great food, seamless service, and happy moments'} />
                </div>
            </div>
        </div>
    )
}

export default AboutHero