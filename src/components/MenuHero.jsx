import React from 'react'
import backgroundImg from '../assets/webp/menuheroimg.webp'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import rating from '../assets/svg/dominosrating.svg'

const MenuHero = () => {
    return (
        <div className='max-w-[1164px] px-3 mx-auto mt-[40px] pb-[225px]'>
            <div className='max-w-[1140px] relative '>
                <img src={backgroundImg} alt="img" className='w-full h-full object-cover rounded-xl' />
                <div className='absolute bottom-[-140px] left-1/2 -translate-x-1/2 shadow-choose rounded-xl p-[40px] flex justify-between max-w-[1040px] w-full bg-white z-[10]'>
                    <div>
                        <SubHeading className={'!text-[36px] mb-1'} text={'Domino’s Pizza'} />
                        <p className='font-medium text-xl mb-[6px] '>Pizza, Fast Food, Beverages</p>
                        <Description className={'text-[#4D4D4D] mb-[6px]'} text={'Domino’s Pizza, Shop No. 3, Main Market, Mehta Nagar, Hisar, Haryana – 125001'} />
                        <Description className={'!font-medium'} text={'Delivery Time: 25-35 mins | ₹ 29 Delivery Fee'} />
                    </div>
                    <div className='flex gap-[7px] h-fit items-center'>
                        <img src={rating} alt="img" className='w-[58px] h-[26px]' />
                        <div>
                            <Description className={'!font-medium !text-[14px]'} text={'12,300'} />
                            <Description className={'!font-light !text-[14px] text-[#4D4D4D]'} text={'Delivery Rating'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHero