import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const CustomePizza = () => {
  return (
    <div>
      <h2 className='text-black font-semibold text-[48px] text-center'>Customsize pizza</h2>
      <Link to={'pizza-detail'}>Go to Pizza Detail </Link>
      {/* nested content will be here */}
      <Outlet />
    </div>

  )
}

export default CustomePizza