import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import { Famous_Data } from '../utils/helper'
import Description from './common/Description'
import { Filter, Star } from '../utils/icon'


const FamousDishes = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <div className='max-w-[1164px] mx-auto px-3 py-[100px] '>
        <div className='max-w-[1140px]'>
          <SubHeading className={'mb-[32px] '} text={'Famous Dishes in Hisar'} />
          <div className='flex gap-[14px]'>
            <Button className='flex items-center gap-[3px] !py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px] '>
              <Filter />
              Filter
            </Button>
            <Button className={'!py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px] '}>All</Button>
            <Button className={'!py-[8px]  !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px] '}>Vegetarian</Button>
            <Button className={'!py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px]'}>Non-Vegetarian</Button>
            <Button className={'!py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px]'}>Top Rated</Button>
            <Button className='!py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px]'>Price : Low to High</Button>
            <Button className='!py-[8px] !px-[14px] max-w-fit whitespace-nowrap w-[170px] border border-[#C1C1C1]  text-[14px] !text-[#C1C1C1] !rounded-[12px]'>Price : High to Low</Button>
          </div>
          <div className='grid grid-cols-4 gap-x-[24px] gap-y-[40px] mt-[40px] '>
            {Famous_Data.map((item, index) => (
              <div key={index} className='rounded-[8px] shadow-card overflow-hidden hover:scale-95 cursor-pointer'>
                <img src={item.img} alt="img" />
                <div className='p-3'>
                  <div className='flex justify-between'>
                    <SubHeading className={'!font-bold !text-[20px] '} text={item.title} />
                    <div className='bg-[#15803D] rounded-[2px] py-[2px] px-[6px] flex gap-[3px] items-center'>
                      <Star />
                      <span className='text-white text-[12px] font-normal'>{item.rating}</span>
                    </div>
                  </div>
                  <Description className={'!text-[12px] mb-[6px] mt-[2px]'} text={item.description} />
                  <Description className={'!font-bold mb-[12px]'} text={item.description} />
                  <Button className={'text-prime border border-[#F87F24] w-full bg-prime'} >Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-[40px]'><Button className='bg-prime'>show More</Button></div>
        </div>
      </div>
    </div>
  )
}

export default FamousDishes