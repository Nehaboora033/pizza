import React from 'react'

const Description = ({className,text}) => {
  return (
   <div className={`font-normal text-base ${className} `}>
      {text}
    </div>
  )
}

export default Description