import React from 'react'
import Button from './common/Button'
import filter from '../assets/svg/filter.svg'
import veg from '../assets/png/veg.png'
import nonVeg from '../assets/png/non-veg.png'
import SubHeading from './common/SubHeading'
import { What_Pizza_Data } from '../utils/helper'
import Description from './common/Description'


const WhatPizza = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 pt-[100px]'>
      <div className='max-w-[1140px]'>

        <div className='flex gap-[12px] mb-[40px]'>
          <Button className={'text-[20px] flex items-center gap-[6.2px] font-normal !py-[8px] !px-[16px] !rounded-[4px] border border-[#C1C1C1] !bg-none !text-black'}>
            <img src={filter} alt="svg" className='w-[15px] h-[14px]' />
            Filter
          </Button>
          <Button className={'text-[20px] flex items-center gap-[6.2px] font-normal !py-[8px] !px-[16px] !rounded-[4px] border border-[#C1C1C1] !bg-none !text-black'}>
            <img src={veg} alt="svg" className='w-[20px] h-[20px]' />
            Veg
          </Button>
          <Button className={'text-[20px] flex items-center gap-[6.2px] font-normal !py-[8px] !px-[16px] !rounded-[4px] border border-[#C1C1C1] !bg-none !text-black'}>
            <img src={nonVeg} alt="svg" className='w-[20px] h-[20px]' />
            Non Veg
          </Button>
        </div>
        <div className='mb-[40px]'>
          <SubHeading className={''} text={'What pizza would you like to eat?'} />
        </div>
        <div className='grid grid-cols-4 gap-6'>
          {What_Pizza_Data.map((item, index) => (
            <div className='shadow-teamcard rounded-xl overflow-hidden' key={index}>
              <img src={item.img} alt="img" />
              <Description className={'py-[6px] text-center !text-[20px]'} text={item.title}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatPizza