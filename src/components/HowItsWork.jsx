import React from 'react'
import Title from './common/Title'
import { LeftLine, RightLine, StepArrow } from '../utils/icon'
import SubHeading from './common/SubHeading'
import { Steps } from '../utils/helper'
import Description from './common/Description'
import Button from './common/Button'

const HowItsWork = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
            {/* ✅ Added title of secction */}
      <Title className={'mb-2'}>
        <LeftLine />
        How It Works
        <RightLine />
      </Title>
      <SubHeading className={'text-center max-w-[568px] w-full mx-auto mb-[40px]'} text={'Your Perfect Pizza in Just 3 Easy Steps!'} />
      <div className='relative '>
        <StepArrow className={'absolute top-[25px] right-[300px] '}/>
        <StepArrow  className={'absolute top-[25px] left-[300px]'}/>
              {/* ✅ Added cards data */}
        <div className='flex gap-[50px] justify-center'>
          {Steps.map((item, index) => (
            <div key={index} className='max-w-[316px] w-full '>
              <div className='bg-[#FFF1E5] flex items-center justify-center w-[70px] h-[70px] mx-auto rounded-[50%]  '>
                {<item.svg />}
              </div>
              <SubHeading className={'!text-[24px] text-center mt-3'} text={item.title} />
              <Description className={'mt-2 mb-3 text-center'} text={item.description} />
              <div className='flex justify-center items-center'>
                <Button className={'!py-[10px] !px-4 max-w-[115px] w-full bg-prime'}>View Menu</Button>
              </div>
            </div>
          ))}
      </div>
      </div>

    </div>
  )
}

export default HowItsWork