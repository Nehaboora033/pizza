import React from 'react'
import backgroundImage1 from '../assets/webp/deliciousimg1.webp'
import backgroundImage2 from '../assets/webp/deliciousimg2.webp'
import Description from './common/Description'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import slice from '../assets/webp/tomatoslice.webp'

const Delicious = () => {
  return (
    <>
    <div className='max-w-[1164px] px-3 mx-auto py-[100px] relative'>
      <div className='flex gap-6 '>
        <div className='w-1/2 bg-center bg-no-repeat bg-cover rounded-xl pl-8 py-[63px]' style={{ backgroundImage: `url(${backgroundImage1})` }}>
            <Description className={'text-prime !text-[28px]'} text={'Delicious'}/>
            <SubHeading className={'text-white !text-[36px]'} text={'Spicy Paneer'} />
            <Description className={'text-white text-[28px] mb-4'} text={'Limited Time'} />
            <Button className={'!py-[10px] !px-4'}>Order Now </Button>
        </div>
        <div className='w-1/2 bg-center bg-no-repeat bg-cover rounded-xl pl-8 py-[63px]' style={{ backgroundImage: `url(${backgroundImage2})` }}>
            <Description className={'text-prime !text-[28px]'} text={'Delicious'}/>
            <SubHeading className={'text-white !text-[36px]'} text={'CHEESE BURST'} />
            <Description className={'text-white text-[28px] mb-4'} text={'Limited Time'} />
            <Button className={'!py-[10px] !px-4'}>Order Now </Button>
        </div>
      </div>
    </div>
     <img src={slice} alt="slice" className='absolute right-0 top-[50%]' />
    </>
  )
}

export default Delicious