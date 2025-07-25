import React from 'react'

const Title = ({ className,LeftSvg:Left,RightSvg:Right } ) => {
  return (
    <div className={`${className} flex items-center`}>
     <Left/>
     <Right/>
    </div>
  )
}

export default Title