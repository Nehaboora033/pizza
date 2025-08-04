import React from 'react'
import SubHeading from './common/SubHeading'
import backgroundImage1 from '../assets/webp/offerforyouimg1.webp'
import backgroundImage2 from '../assets/webp/offerforyouimg2.webp'
import pizza1 from '../assets/webp/offerforyouopizza1.webp'
import pizza2 from '../assets/webp/offerforyoupizza2.webp'


const OfferForYou = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3'>
      <div className='max-w-[1140px]'>
        <SubHeading className={'!text-[32px] mb-[24px]'} text={'Offers for You'} />
        <div className='flex gap-[24px]'>
          <div className=' relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg w-1/2 h-[300px]' style={{ backgroundImage: `url(${backgroundImage1})` }}>
            heloo
            <img src={pizza1} alt="img" className='absolute right-[-130px] top-[-25px]' />
          </div>
          <div className=' relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-l w-1/2 h-[300px]' style={{ backgroundImage: `url(${backgroundImage2})` }}>
            jjk
            <img src={pizza2} alt="img" className='absolute right-[-175px] top-[-22px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferForYou