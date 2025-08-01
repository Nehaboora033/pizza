import React from 'react'
import backgroundImage from '../assets/webp/fooddeliverybg.webp'
import img from '../assets/webp/fooddeliveryimg.webp'
import Title from './common/Title'
import { RightLine } from '../utils/icon'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import check from '../assets/svg/check.png'
import { Fooddelivery_Data } from '../utils/helper'
import slice from '../assets/webp/tomatoslice.webp'

const FoodDelivery = () => {
  return (
    <>
    <div className='bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1164px] px-3 mx-auto py-[100px]'>
        <div className='flex'>
          <div className='w-1/2'>
                {/* ✅ Added title to the section */}
            <Title className={'!justify-start'}>
              Food Delivery
              <RightLine />
            </Title>
            <SubHeading className={'max-w-[463px]'} text={'Fast, Fresh & Always On Time'} />
            <Description className={'max-w-[495px] mt-[15px] mb-4'} text={'We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away.'} />
            {Fooddelivery_Data.map((item, index) => (
              <div className='flex gap-[6px] flex-shrink-0 mb-[8px] items-center' key={index}>
                <img src={ check} alt="svg" className='w-[18px] h-[18px]' />
                <div className=''>{item.info} </div>
              </div>
            ))}
          </div>
          <div className='w-1/2 '>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
          {/* ✅ Added tomato slice */}
     {/* <img src={slice} alt="img" className=' absolute bottom-0 left-0 rotate-180' /> */}
    </>
  )
} 

export default FoodDelivery
