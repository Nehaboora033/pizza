import React from 'react'

const Title = ({ className,children } ) => {
  return (
    <div className={`${className} flex justify-center items-center text-prime mb-[8px]`}>
     {children}
    </div>
  )
}

export default Title