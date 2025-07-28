import React from 'react'
import backgroundImage from '../assets/webp/herobgwhite.webp'
import Title from './common/Title'
import { Line } from '../utils/icon'
import img from '../assets/webp/chef.webp'
import SubHeading from './common/SubHeading'
import { About_Data } from '../utils/helper'
import Description from './common/Description'

const AboutUs = () => {
    return (
        <div className='max-w-[1164px] px-3 mx-auto bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex'>
                <div className='w-1/2'>
                    <div className='flex items-center'>
                        <Title className={'justify-start !mb-0'}>About Us</Title>
                        <Line />
                    </div>
                    <SubHeading className={'mt-[8px] mb-[16px] '} text={'Welcome to the Nest'} />
                    <ul className="list-disc pl-5 marker:text-[#4D4D4D]">
                        {About_Data.map((item, index) => (
                            <li key={index}>
                                <Description
                                    className="mt-3 max-w-[558px] w-full text-[#4D4D4D]"
                                    text={item.info}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-1/2 flex justify-end'>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs