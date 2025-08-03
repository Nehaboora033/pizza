import React from 'react'
import { Team_Data } from '../utils/helper'
import SubHeading from './common/SubHeading'
import Description from './common/Description'

const OurTeam = () => {
    return (
        <div className='max-w-[1140px] px-3 mx-auto pb-[100px]'>
            <SubHeading className={'text-center mb-[60px]'} text={'Meet Our Team'} />
            <div className='flex gap-6'>
                {Team_Data.map((item, index) => (
                    <div className='rounded-2xl shadow-teamcard overflow-hidden hover:bg-[#e1e2e9] transition-colors duration-200 cursor-pointer' key={index}>
                        <img src={item.img} alt="img" className='object-cover w-full'/>
                        <div className='p-4 '>
                            <SubHeading className={'!text-[24px] mb-1'} text={item.name} />
                            <Description className={'text-[#222222]'} text={item.role} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam