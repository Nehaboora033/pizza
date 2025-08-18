import React, { useState } from 'react'
import { NavLinks } from '../../utils/helper'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from './Button'
import { Address, Cart, Help, IconSearch, Sign_In } from '../../utils/icon'
import Description from './Description'
import Input from './Input'
import SignUpModal from './SignUpModal'
import Login from './Login'

const Header = () => {
  const location = useLocation();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className='max-w-[1140px] mx-auto p-3 pb-[22px]'>
        <div className='flex items-center  justify-between'>
          <Link to={'/'} className='font-medium text-[34px] leading-[100%] text-prime'>
            Pizza Nest
          </Link>

          {/* ✅ Show this only on Home Page */}
          {location.pathname === '/' && (
            <div className='max-w-[700px] w-full flex items-center justify-between home'>
              <nav className='flex gap-6 items-center capitalize'>
                {NavLinks.map((item, index) => (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      `font-noraml relative ${isActive ? 'nav-active' : 'text-[#787878] '}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              <Link to={'/contact'}>
                <Button className='bg-prime'>Contact Us</Button>
              </Link>
            </div>
          )}

          {/* ✅ Show this only on Other Pages */}
          {location.pathname !== '/' && (
            <div className='flex items-center gap-[40px] max-w-[915px] w-full'>
              <Link to='/contact'>
                <div className='flex gap-[2px] items-center '>
                  <Address />
                  <div className='border-r border-[#D1D5DB] pr-[10px]'>
                    <Description className={' text-[#6B7280s] !text-[12px]'} text={'Location'} />
                    <Description className={'whitespace-nowrap'} text={'Hisar, Haryana 125001'} />
                  </div>
                </div>
              </Link>
              <Input className={'pl-[41px] !py-[10px]'} placeholder={'Search for what you want...'}>
                <IconSearch />
              </Input>
              <div className='flex gap-4 '>
                <div className='flex gap-[2px] items-center cursor-pointer'>
                  <Help />
                  <Description className={'text-[#374151]'} text={'Help'} />
                </div>
                <div
                  className='flex gap-[2px] items-center cursor-pointer'
                  onClick={() => setShowSignUp(true)} // 👈 open signup modal
                >
                  <Sign_In />
                  <Description className='whitespace-nowrap text-prime' text={'Sign In'} />
                </div>
                <Cart className={'cursor-pointer'} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Render modals */}
      {showSignUp && (
        <SignUpModal
          onClose={() => setShowSignUp(false)}
          onSwitchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}
    </>
  )
}

export default Header