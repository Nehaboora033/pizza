import React from 'react'
import backgroundImage from '../assets/webp/herobgwhite.webp'
import Title from './common/Title'
import { Line } from '../utils/icon'
import img from '../assets/webp/chef.webp'
import SubHeading from './common/SubHeading'
import { About_card, About_Data } from '../utils/helper'
import Description from './common/Description'

const AboutUs = () => {
    return (
        <div className='bg-no-repeat bg-center bg-cover pt-[100px] pb-[50px]' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='max-w-[1164px] px-3 mx-auto ' >
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
                        <div className='flex gap-6 mt-6'>
                            {About_card.map((item, index) => (
                                <div key={index} className={`${index === 1 ? 'mt-3' : ''}  max-w-[170px] w-full h-full border-dashed rounded-xl border-[#FAD8C5] border bg-white shadow-orange`}>
                                    <div className='flex justify-center flex-col items-center p-[16px]'>
                                        <div className='w-[52px] h-[52px] bg-[#FEF0E5] rounded-[50%] flex items-center justify-center flex-shrink-0'>
                                            <item.svg />
                                        </div>
                                        <Description className={'text-[#474747] text-center whitespace-nowrap mt-2'} text={item.info} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs