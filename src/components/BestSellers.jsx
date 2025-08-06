import React from 'react'
import Title from './common/Title'
import { LeftLine, RightLine } from '../utils/icon'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Seller_Data } from '../utils/helper'
import Button from './common/Button'
import backgroundImage from '../assets/webp/bestsellerbg.webp'

const BestSellers = () => {
  return (
    <div className='bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
        <Title>
          <LeftLine />
          Best Sellers
          <RightLine />
        </Title>
        <SubHeading className={'text-center'} text={'Pizzas You Can’t Say No To'} />
        <Description className={'text-[#373737] max-w-[589px] text-center mx-auto mt-4 w-full'} text={'Tried, tested, and totally loved. These pizzas are always a crowd favorite.'} />
        <div className='flex gap-6 justify-center pt-[125px] '>
          {Seller_Data.map((item, index) => (
            <div key={index} className=''>
              <div className='max-w-[267px] border pt-[80px] bg-white border-[#EFEFEF] rounded-tr-xl relative rounded-bl-xl hover:border-[#EF6816] transition-colors duration-200 cursor-pointer hover:scale-95 p-6'>
                <SubHeading className={'text-prime !text-[32px] mb-0.5 text-center'} text={item.price} />
                <SubHeading className={'mb-0.5 !text-[24px] text-center'} text={item.title} />
                <Description className={'mb-3 text-center text-[#5C5C5C]'} text={item.description} />
                <div className='flex items-center justify-center'><Button className={'!py-[10px] !px-4 bg-prime'}>Order Now</Button></div>
                <img src={item.pizza} alt="img" className='absolute top-[-30%] left-[65px]' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestSellers