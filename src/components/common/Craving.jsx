import React from 'react'
import SubHeading from '../common/SubHeading'
import Button from './Button'
import Description from './Description'

const Craving = () => {
  return (
    <div className='bg-[#0A0501]'>
      <div className='py-[80px] mx-auto max-w-[746px] px-3 '>
        <SubHeading className={'text-white  w-full text-center  mb-4'} text={'Craving something cheesy, spicy, or just straight-up delicious?'} />
        <Description className={'text-[#E8E8E8] max-w-[465px] mx-auto mb-[32px]  w-full text-center '} text={'Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.'} />
        <div className='flex gap-6 justify-center'>
          <Button className={'py-4 px-[32px] bg-prime'}>Order Now </Button>
          <Button className={' outline'}>View Full Menu</Button>
        </div>
      </div>
    </div>
  )
}

export default Craving