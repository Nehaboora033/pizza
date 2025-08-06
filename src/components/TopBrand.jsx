import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'

const TopBrand = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <div className='max-w-[1164px] px-3 mx-auto py-[100px] ]'>
        <div className='max-w-[1140px]'>
          <div className='mb-[6px]'>
            <SubHeading className={'text-[40px]'} text={'Top Brands For You'}/>
          </div>
          <Description className={'mb-[40px]'} text={'Based on your location in Hisar'}/>
        </div>
      </div>
    </div>
  )
}

export default TopBrand