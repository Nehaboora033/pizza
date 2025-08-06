import React from 'react'
import backgroundImage from '../assets/webp/herobgimg.webp'
import Description from './common/Description'
import Button from './common/Button'
import SubHeading from './common/SubHeading'
import { Arrow } from '../utils/icon'
import img from '../assets/png/price.png'

const Hero = () => {
  return (
    <div className='max-w-[1384px] px-3 mx-auto'>
      <div className='max-w-[1360px] mx-auto px-3 rounded-3xl bg-no-repeat bg-center bg-cover pl-[110px] pt-[127px] pb-[188px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className='text-white font-bold text-[64px] relative max-w-[593px] w-full leading-[120%]'>Where Every Slice Feels Like Home</h1>
        <Description className={'text-[#EFEFEF] max-w-[588px] mt-4 mb-8'} text={'At Pizza Nest we bake more than pizza — we bake comfort. Customize your perfect slice or choose from our signature favorites'} />
        <Button className={'pt-[16px] px-[32px] mr-6 bg-prime'}>Order Now</Button>
        <Button className={'!border-white border '}>View Full Menu</Button>
        <div className='mt-5 flex items-center '>
          <div className='max-w-[155px] w-full p-3'>
            <SubHeading className={'text-white !text-[28px] text-center whitespace-nowrap'} text={'5,000+'} />
            <Description className={'text-white mt-[2px] text-center whitespace-nowrap'} text={' Pizzas Delivered'} />
          </div>
          <div className='border-white border h-[39px]'></div>
          <div className='max-w-[155px] w-full p-3'>
            <SubHeading className={'text-white !text-[28px] text-center whitespace-nowrap'} text={'98%'} />
            <Description className={'text-white mt-[2px] text-center whitespace-nowrap'} text={'Happy Customers'} />
          </div>
        </div>
        <Arrow className={'absolute top-[33%] right-[32%]'} />
        <img src={img} alt="img" className='absolute top-[25%] right-[25%]' />
      </div>
    </div>
  )
}

export default Hero