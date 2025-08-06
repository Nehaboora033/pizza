import React from 'react'
import backgroundImage from '../assets/webp/limittedOfferbg.webp'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import img from '../assets/webp/limitedofferimg.webp'

const LimitedOffer = () => {
  return (
    <div className='bg-no-repeat bg-center bg-cover pt-[17px] pb-[33px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1164px] px-3 mx-auto'>
        <div className='flex justify-between '>
          <div className='w-[55%] flex flex-col justify-center'>
            <div className='text-prime font-semibold text-[28px]'> Buy 1 Pizza, Get 1 Free!</div>
            <SubHeading className={'text-white mt-[2px] mb-2 text-[56px]'} text={'Medium & Large pizzas'} />
            <div className='text-prime font-semibold text-[28px] mb-4 '>
              Limited Offer
            </div>
            <Button className={'w-[145px] bg-prime'}>Order Now</Button>
          </div>
          <div className='w-[40%] flex'>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div> 
  )
}

export default LimitedOffer