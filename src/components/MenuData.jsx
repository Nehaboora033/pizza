import React, { useState } from 'react'
import Input from './common/Input'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import veg from '../assets/png/veg.png'
import nonveg from '../assets/png/non-veg.png'
import { Menu_Tabs, menupizza } from '../utils/helper'
import Description from './common/Description'
import rating from '../assets/svg/dominosrating.svg'
import { IconSearch } from '../utils/icon'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const MenuData = () => {
  const [activeTab, setActiveTab] = useState("All"); // default All

  // Filter pizzas based on active tab
  const filteredPizzas =
    activeTab === "All"
      ? menupizza
      : menupizza.filter((pizza) => pizza.category === activeTab);


  return (
    <div className='max-w-[1164px] mx-auto px-3 mt-[40px] mb-[100px]'>
      <div className='max-w-[1140px]'>
        <Input className={'pl-[40px] border-none bg-[#FAFAFA]'} 
        placeholder={'Search for dishes...'}
        type={'search'}
        >
          <IconSearch />
        </Input>
        <SubHeading className={'mt-[36px] !text-[32px]'} text={'Menu'} />

        <Tabs>
          <TabList className="flex gap-[14px] mt-[20px]">
            {Menu_Tabs.map((item, index) => (
              <Tab
                key={index}
                className={
                  "py-[10px] px-[25px] w-[170px] text-center rounded-[12px] cursor-pointer outline outline-[#C1C1C1] text-[#C1C1C1]"
                }
                selectedClassName="bg-prime !text-white !outline-none"
              >
                {item}
              </Tab>
            ))}
          </TabList>

          {/* Pizzas Tab */}
          <TabPanel>
            <SubHeading className={'mt-[36px] !text-[24px]'} text={'Pizzas'} />

            {/* Veg / Non-Veg Filter */}
            <div className="flex gap-[14px] mt-5 mb-[40px]">
              {/* All */}
              <button
                onClick={() => setActiveTab("All")}
                className={`flex gap-1 items-center cursor-pointer px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "All"
                  ? "bg-prime text-white "
                  : "text-black border-[#C2C2C2]"
                  }`}
              >
                All
              </button>

              {/* Veg */}
              <button
                onClick={() => setActiveTab("Veg")}
                className={`flex gap-1 items-center cursor-pointer px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "Veg"
                  ? "bg-prime text-white "
                  : "text-black border-[#C2C2C2]"
                  }`}
              >
                <img src={veg} alt="veg" className="size-[20px]" />
                Veg
              </button>

              {/* Non-Veg */}
              <button
                onClick={() => setActiveTab("Non-Veg")}
                className={`flex gap-1 items-center cursor-pointer px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "Non-Veg"
                  ? "bg-prime text-white "
                  : "text-black border-[#C2C2C2]"
                  }`}
              >
                <img src={nonveg} alt="non-veg" className="size-[20px]" />
                Non Veg
              </button>
            </div>

            {/* Pizza List */}
            <div className='grid grid-cols-2 gap-6'>
              {filteredPizzas.map((item, index) => (
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
                    <Button className={'text-prime border border-[#EC6112] rounded-[11px] p-4'}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel className="text-5xl text-center mt-6">Sides & Starters</TabPanel>
          <TabPanel className="text-5xl text-center mt-6">Beverages</TabPanel>
          <TabPanel className="text-5xl text-center mt-6">Desserts</TabPanel>
          <TabPanel className="text-5xl text-center mt-6">Meal Combos</TabPanel>
        </Tabs>

        <div className='flex justify-center'>
          <Button className={'mt-[32px] bg-prime'}>Show More</Button>
        </div>
      </div>
    </div>
  )
}

export default MenuData