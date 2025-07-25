import React from 'react'

const Title = ({ className }) => {
  return (
    <div className={`${className} `}>
      <Left />
      <Right />
    </div>
  )
}

export default Title