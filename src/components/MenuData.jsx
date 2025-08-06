import React from 'react'
import Input from './common/Input'
import { SearchIcon } from '../utils/icon'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import veg from '../assets/png/veg.png'
import nonveg from '../assets/png/non-veg.png'
import { menupizza } from '../utils/helper'
import Description from './common/Description'
import rating from '../assets/svg/dominosrating.svg'

const MenuData = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 mt-[40px] mb-[100px]'>
      <div className='max-w-[1140px]'>
        <Input className={'pl-[40px] border-none bg-[#FAFAFA]'} placeholder={'Search for dishes...'}>
          <SearchIcon />
        </Input>
        <SubHeading className={'mt-[36px] !text-[32px]'} text={'Menu'} />
        <div className='flex mt-[10px] gap-[14px]'>
          <Button className={'!pt-[10px] !px-[62px] bg-prime'}>Pizzas</Button>
          <Button className={'!pt-[10px] !px-[62px] bg-prime'}>Sides & Starters</Button>
          <Button className={'!pt-[10px] !px-[62px] bg-prime'}>Beverages</Button>
          <Button className={'!pt-[10px] !px-[62px] bg-prime'}>Desserts</Button>
          <Button className={'!pt-[10px] !px-[62px] bg-prime'}>Meal Combos</Button>
        </div>

        <div>
          <SubHeading className={'mt-[36px] !text-[24px]'} text={'Pizzas'} />
          <div className='flex gap-[14px] mt-5 mb-[40px]'>
            <Button className={'flex gap-1 items-center !px-[16px] !py-[8px] !rounded-[4px] border !text-black border-[#C2C2C2] whitespace-nowrap text-[20px]'}>
              <img src={veg} alt="img" className='size-[20px] ' />
              Veg
            </Button>
            <Button className={'flex gap-1 items-center !px-[16px] !text-black border !rounded-[4px] border-[#C2C2C2]  !py-[8px] whitespace-nowrap text-[20px] '}>
              <img src={nonveg} alt="img" className='size-[20px]' />
              Non Veg
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {menupizza.map((item, index) => (
            <div className='p-3 flex gap-[16px] rounded-[8px] shadow-card row' key={index}>
              <div className='w-1/2'>
                <img src={item.img} alt="img" className='rounded-[8px]' />
              </div>
              <div className='w-1/2 flex flex-col justify-center '>
                <div className='flex gap-[15px]'>
                  <SubHeading className={'!text-[20px]'} text={item.title} />
                  <img src={rating} alt="svg" className='w-[44px] h-[20px]' />
                </div>
                <Description className={'!text-[12px] mt-[4px] mb-[6px]'} text={item.description} />
                <Description className={'!font-bold mb-[12px]'} text={item.price} />
                <Button className={'text-prime border border-[#EC6112] rounded-[11px] p-4'}>Add to Cart </Button>
              </div>
            </div>
          ))}
        </div>
       <div className='flex justify-center'><Button className={'mt-[32px] bg-prime'}>Show More</Button></div>
      </div>
    </div>
  )
}
export default MenuData