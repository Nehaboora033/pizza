import React from 'react'
import backgroundImage from '../assets/webp/limittedOfferbg.webp'
import img from '../assets/webp/limitedofferimg.webp'
import Button from './common/Button'
import direction from '../assets/svg/arrowdirection.svg'

const OfferHero = () => {
  return (
    <div className='max-w-[1344px] mx-auto px-3'>
      <div className='max-w-[1320px] flex items-center relative bg-center bg-no-repeat bg-cover rounded-[32px] p-[60px] h-[476px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className=''>
          <p className='font-medium text-[28px] text-white'>Buy 1 Pizza, Get 1 Free!</p>
          <h1 className='font-extrabold text-[50px] text-white mt-[2px]'>Medium & Large pizzas</h1>
          <p className='font-medium text-[28px] text-white mt-1'>Limited Offer</p>
          <Button className={'mt-[12px]'}>Order Now</Button>
        </div>
        <img src={img} alt="img" className='absolute top-[80px] right-0' />
        <div className='rounded-[6px]  font-extrabold text-white p-[8.48px] text-[19px] text-start absolute top-[50px] right-[39%] w-[153px] h-[88px] box-prime1'>
          <span className=' text-[35px] leading-[100%]'>50% </span>Discount
        </div>
        <div className='rounded-[6px] text-end text-white  absolute right-[47%] bottom-[50px] w-[153px] font-extrabold p-[8.48px] text-[19px]  h-[88px] box-prime2'>
          <span className='block leading-[100%]  text-[37px]'>Free</span>
          HomeDelivery
        </div>
        <img src={direction } alt="arrow"  className='absolute top-[150px] right-[47%]'/>
           <img src={direction } alt="arrow"  className='absolute bottom-[150px] right-[54%] rotate-x-180 '/>
      </div>

    </div>
  )
}

export default OfferHero