import React from 'react'
import Logo from '../../assets/png/footerlogo.png'
import { Footer_Links, SocialLinks } from '../../utils/helper'
import { Link } from 'react-router-dom'
import Description from './Description'

const Footer = () => {

  return (
    <div className='1146px mx-auto px-3 pt-[80px] pb-4'>
      <div className='flex '>
        <div className='w-1/2'>
          <img src={Logo} alt="logo" />
          <Description className={'my-6 text-[#575757] max-w-[558px] w-full '} text={'At Pizza Nest, we believe every slice should bring joy. Whether you are ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.'} />
          <div className='flex gap-5'>
            {SocialLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-prime size-[52px] cursor-pointer flex items-center justify-center hover:shadow transition-all hover:-translate-y-1">
                <item.icon />
              </Link>
            ))}
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <div className='flex gap-[80px]'>
            {Footer_Links.map((item, index) => (
              <ul key={index} className=''>
                <li className='font-semibold text-base mb-3'>{item.title} </li>
                {item.link.map((link, i) => (
                  <li key={i} className='mb-2'>
                    <Link to={''} className='text-base font-normal text-[#575757] '>{link} </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className='text-[#575757] font-normal text-[16px] text-center border-t-[3px] mt-8 border-[#ECECEC] pt-[19px]'>
        Copyright Pizza Nest © 2025, All rights reserved 
      </div>

    </div>
  ) 
}

export default Footer