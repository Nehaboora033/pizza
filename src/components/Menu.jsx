import React from 'react'
import { LeftLine, RightLine } from '../utils/icon'
import SubHeading from './common/SubHeading'
import Title from './common/Title'
import { Menu_Data } from '../utils/helper'
import Description from './common/Description'
import rating from '../assets/png/rating.png'
import Button from './common/Button'

const Menu = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto py-[100px]'>
      <Title>
        <LeftLine />
        Our Menu
        <RightLine />
      </Title>
      <SubHeading className={'text-center max-w-[569px] w-full mx-auto'} text={'Explore Flavours, Pick Your Cravings'} />
      <div className='flex gap-6 mt-[40px]'>
        {Menu_Data.map((item, index) => (
          <div className='flex flex-col items-center relative pb-[163px]' key={index}>
            <img src={item.img} alt="img" className='w-[364px] h-[292px] rounded-tl-xl rounded-tr-xl border border-[#EBEBEB] ' />
            <div className='p-5 max-w-[284px] w-full border border-[#EBEBEB] rounded-[8px] bg-white absolute top-[250px]'>
              <SubHeading className={'!text-2xl text-prime mb-0.5 text-center'} text={item.price} />
              <SubHeading className={'!text-2xl text-center'} text={item.title} />
              <Description className={'text-[#5C5C5C] text-center'} text={item.description} />
              <img src={rating} alt="rating" className='mx-auto mt-1' />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-[32px]'><Button>View More</Button></div>
    </div>
  )
}

export default Menu