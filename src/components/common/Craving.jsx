import React from 'react'
import SubHeading from '../common/SubHeading'
import NormalText from '../common/NormalText'
import Button from './Button'

const Craving = () => {
  return (
    <div className='bg-[#0A0501]'>
      <div className='py-[80px] mx-auto max-w-[746px] px-3 '>
        <SubHeading className={'text-white  w-full text-center  mb-4'} SubHeadingText={'Craving something cheesy, spicy, or just straight-up delicious?'} />
        <NormalText className={'text-[#E8E8E8] max-w-[465px] mx-auto mb-[32px]  w-full text-center '} NormalText={'Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.'} />
        <div className='flex gap-6 justify-center'>
          <Button className={'py-4 px-[32px]'}>Order Now </Button>
          <Button className={'!bg-none outline'}>View Full Menu</Button>
        </div>
      </div>
    </div>
  )
}

export default Craving