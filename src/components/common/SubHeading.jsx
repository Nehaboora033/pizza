import React from 'react'

const SubHeading = ({ className, text }) => {
  return (
    <div className={`font-semibold text-[48px] leading-[120%]  ${className} `}>
      {text}
    </div>
  )
}

export default SubHeading