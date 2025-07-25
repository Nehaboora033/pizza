import React from 'react'

const NormalText = ({className,NormalText}) => {
  return (
    <div className={`font-normal text-base ${className} `}>
      {NormalText}
    </div>
  )
}

export default NormalText