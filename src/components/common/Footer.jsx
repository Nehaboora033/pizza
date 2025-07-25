import React from 'react'
import Button from './Button'
import Logo from '../../assets/png/footerlogo.png'
import NormalText from './NormalText'



const Footer = () => {
  return (
    <div className='1146px mx-auto px-3 pt-[80px] pb-4'>
      <div className='flex '>
        <div className='w-1/2'>
         <img src={Logo} alt="logo" />
         <NormalText className={'my-6 text-[#575757] max-w-[558px] w-full '} NormalText={'At Pizza Nest, we believe every slice should bring joy. Whether you are ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.'}/>
        
        </div>
        
        <div className='w-1/2'>

        </div>
      </div>

    </div>
  )
}

export default Footer