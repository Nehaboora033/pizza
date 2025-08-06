import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'

const OurClient = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
      <div className='max-w-[1140px]'>
        <SubHeading className={'text-center'} text={'What Our Clients Say?'} />
        <Description className={'text-center text-[#373737] max-w-[768px] w-full mx-auto mt-[16px] mb-[40px]'} text={'Real stories. Real flavors. Hear what our happy customers have to say about their pizza experience — from first bites to last crumbs, satisfaction is guaranteed.'}/>
      </div>
    </div>
  )
}

export default OurClient