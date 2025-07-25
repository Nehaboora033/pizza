import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button className={`${className} rounded-[12px] py-[16px] px-[32px] bg-prime text-white hover-text-prime hover:border border-amber-600 `}>
      {children}
    </button>
  )
}

export default Button