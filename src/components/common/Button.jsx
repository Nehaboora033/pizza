import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button className={`${className} rounded-[12px] py-[16px] px-[32px] cursor-pointer bg-prime text-white hover:scale-105`}>
      {children}
    </button>
  )
}

export default Button