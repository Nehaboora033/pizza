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
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const MenuData = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  const filteredPizzas =
    activeTab === "All" ? menupizza : menupizza.filter((p) => p.category === activeTab);

  const { addToCart, cartItems } = useCart();

  const isInCart = (title) => cartItems.some((x) => x.title === title);

  const handleAddToCart = (item) => {
    addToCart(item);
    setLastAdded(item);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };

  return (
    <div className='relative max-w-[1164px] mx-auto px-3 mt-[40px] mb-[100px]'>

      {/* Main Menu */}
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
                className="py-[10px] px-[25px] w-[170px] text-center rounded-[12px] cursor-pointer outline outline-[#C1C1C1] text-[#C1C1C1]"
                selectedClassName="bg-prime !text-white !outline-none"
              >
                {item}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <SubHeading className={'mt-[36px] !text-[24px]'} text={'Pizzas'} />

            {/* Veg / Non-Veg Filter */}
            <div className="flex gap-[14px] mt-5 mb-[40px]">
              <button
                onClick={() => setActiveTab("All")}
                className={`px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "All" ? "bg-prime text-white" : "text-black border-[#C2C2C2]"}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("Veg")}
                className={`flex gap-1 items-center px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "Veg" ? "bg-prime text-white" : "text-black border-[#C2C2C2]"}`}
              >
                <img src={veg} alt="veg" className="size-[20px]" /> Veg
              </button>
              <button
                onClick={() => setActiveTab("Non-Veg")}
                className={`flex gap-1 items-center px-[16px] py-[8px] rounded-[4px] border text-[20px] ${activeTab === "Non-Veg" ? "bg-prime text-white" : "text-black border-[#C2C2C2]"}`}
              >
                <img src={nonveg} alt="non-veg" className="size-[20px]" /> Non Veg
              </button>
            </div>

            {/* Pizza List */}
            <div className='grid grid-cols-2 gap-6'>
              {filteredPizzas.map((item, index) => (
                <div key={index} className='p-3 flex gap-[16px] rounded-[8px] shadow-card'>
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

                    {isInCart(item.title) ? (
                      <Link
                        to="/cart"
                        className="text-center text-white bg-prime border border-[#EC6112] rounded-[11px] p-4 cursor-pointer block"
                      >
                        Go to Cart
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="text-prime border border-[#EC6112] rounded-[11px] p-4 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="m-5 font-semibold text-3xl text-center pt-3">Sides & Starters</div>
          </TabPanel>
          <TabPanel>
            <div className="m-5 font-semibold text-3xl text-center pt-3">Beverages</div>
          </TabPanel>
          <TabPanel>
            <div className="m-5 font-semibold text-3xl text-center pt-3">Desserts</div>
          </TabPanel>
          <TabPanel>
            <div className="m-5 font-semibold text-3xl text-center pt-3">Meal Combos</div>
          </TabPanel>
        </Tabs>
        <div className='flex justify-center'>
          <Button className={'mt-[32px] bg-prime'}>Show More</Button>
        </div>
      </div>
    </div>
  )
}

export default MenuData