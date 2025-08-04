import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Why_choose_Data } from '../utils/helper'

const WhyChooseUs = () => {
    return (
        <div className='max-w-[1140px] px-3 mx-auto mb-[100px]'>
            <SubHeading className={'text-center mb-4'} text={'Why Choose Us'} />
            <Description className={'max-w-[569px] w-full text-center mx-auto mb-[60px]'} text={'We’re here to make food ordering faster, safer, and easier. With trusted reviews, quick delivery, and 24/7 support — we’ve got you covered.'} />
            <div className='flex gap-6'>
                {Why_choose_Data.map((item, index) => (
                    <div key={index} className='rounded-2xl shadow-choose p-6'>
                        <div>
                            <div className='rounded-[50%] mb-6 size-[60px]  bg-[#FFF1E5] flex justify-center  items-center'>
                                <item.svg />
                            </div>
                            <SubHeading  className={'mb-3 !text-[20px]'} text={item.name}/>
                            <Description className={'text-[#333333]'} text={item.description}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs