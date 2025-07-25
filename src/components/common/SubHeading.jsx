import React from 'react'

const SubHeading = ({ className, SubHeadingText }) => {
  return (
    <div className={`font-semibold text-[48px] leading-[120%]  ${className} `}>
      {SubHeadingText}
    </div>
  )
}

export default SubHeading