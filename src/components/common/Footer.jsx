import React from 'react'
import Logo from '../../assets/png/footerlogo.png'
import { Footer_Links, SocialLinks } from '../../utils/helper'
import { Link, NavLink } from 'react-router-dom'
import Description from './Description'

const Footer = ({ customBg }) => {

  return (
    <div className={customBg ? 'bg-[#F9FAFB]' : ''}>
      <div className='max-w-[1140px] mx-auto px-3 pt-[80px] pb-4'>
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
                <ul key={index}>
                  <li className='font-semibold text-base mb-3'>{item.title} </li>
                  {item.link.map(({ name, path }, i) => (
                    <li key={i} className='mb-2'>
                      {/*  ✅ added navlink on footer */}
                      <NavLink
                        to={path}
                        className='relative text-base font-normal text-[#575757] hover:text-[#EE6615] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#EE6615]  before:transition-all before:duration-300 hover:before:w-full'>
                        {name}
                      </NavLink>
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
    </div>
  )
}

export default Footer