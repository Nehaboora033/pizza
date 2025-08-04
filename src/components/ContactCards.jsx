import React from 'react'
import { Contactcard } from '../utils/helper'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Link } from 'react-router-dom'

const ContactCards = () => {
  return (
    <div className='max-w-[1140px] px-3 mx-auto pt-[100px]'>
      <div className='flex gap-6'>
        {Contactcard.map((item, index) => (
          <div className='shadow-card max-w-[364px] w-full rounded-xl flex justify-center items-center flex-col p-6' key={index}>
            <div className='size-[60px] bg-[#FFF1E6] rounded-full flex-shrink-0 flex items-center justify-center '>
              <item.svg />
            </div>
            <SubHeading className={'mt-5 !text-[24px] text-center'} text={item.title} />
            <Link to={item.link}>
              <Description className={'text-[#717171] mt-3 max-w-[252px] w-full text-center'} text={item.data} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactCards