import React from 'react'
import { NavLinks } from '../../utils/helper'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <div className='max-w-[1140px] mx-auto p-3'>
      <div className='flex items-center  justify-between'>
        <Link to={'/'} className='font-medium text-[34px] leading-[100%] text-prime'>
          Pizza Nest
        </Link>
        <nav className='flex gap-6 items-center capitalize '>
          {NavLinks.map((item, index) => {
            return (
              <NavLink
                to={item.link} key={index} className={({ isActive }) => `font-noraml relative ${isActive ? 'nav-active' : 'text-[#787878] '}`}>
                {item.name}
              </NavLink>
            )
          })}
        </nav>
        <Button>Contact Us</Button>
      </div>
    </div>
  )
}

export default Header