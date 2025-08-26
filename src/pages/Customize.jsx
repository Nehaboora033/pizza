import React, { useEffect, useRef, useState } from 'react'
import backgroundImage from "../assets/webp/customizeheroimg.webp"
import SubHeading from '../components/common/SubHeading'
import Description from '../components/common/Description'
import { Exchange_Data, NonVeg_Topping, Select_Crust, Select_Crust_Price, Select_Size_Pizza, Select_Size_Pizza_Price, Toppings } from '../utils/helper'
import Button from '../components/common/Button'
import { Add, Add_Green, Exchange, Leftcursor, Remove, Rightcursor, Tick } from '../utils/icon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { parsePrice } from '../utils/price'
import veg from '../assets/png/veg.png'
import nonveg from '../assets/png/non-veg.png'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'


const Customize = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const [selectedToppings, setSelectedToppings] = useState([]);
  const { updateItem } = useCart();
  const location = useLocation();
  const pizza = location.state?.pizza;

  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedCrust, setSelectedCrust] = useState(0);

  // ✅ Always use basePrice (fallback to original price)
  const basePrice = pizza.basePrice ?? parsePrice(pizza.price);

  // ✅ calculate dynamic total
  const toppingPrice = selectedToppings.length * 30;
  const crustExtra = Select_Crust_Price[selectedCrust]?.extra || 0;
  const sizeExtra = Select_Size_Pizza_Price[selectedSize]?.extra || 0;
  const finalPrice = basePrice + crustExtra + sizeExtra + toppingPrice;

  const handleSave = () => {
    if (!pizza) return;

    updateItem(pizza.title, {
      ...pizza,
      basePrice, // ✅ keep original base price
      size: Select_Size_Pizza_Price[selectedSize]?.name,
      crust: Select_Crust_Price[selectedCrust]?.name,
      customizations: selectedToppings,
      price: finalPrice, // ✅ store recalculated price
    });
    navigate("/cart", { replace: true });
  };

  useEffect(() => {
    if (pizza) {
      if (pizza.customizations) setSelectedToppings(pizza.customizations);

      if (pizza.size) {
        const sizeIndex = Select_Size_Pizza.findIndex(s => s.name === pizza.size);
        if (sizeIndex !== -1) setSelectedSize(sizeIndex);
      }

      if (pizza.crust) {
        // ✅ match against Select_Crust_Price not Select_Crust
        const crustIndex = Select_Crust_Price.findIndex(c => c.name === pizza.crust);
        if (crustIndex !== -1) setSelectedCrust(crustIndex);
      }
    }
  }, [pizza]);
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${pizza?.img || backgroundImage})`
        }}
      >
        <div className='flex gap-[8px] pt-[388px] pb-4 max-w-[1140px] w-full mx-auto px-3'>
          <img
            src={pizza.category === "Veg" ? veg : nonveg}
            alt={pizza.category}
            className='size-[28px]'
          />
          {/* ✅ Always show the original price (basePrice) */}
          <p className='text-white font-semibold text-[24px]'>₹ {basePrice}</p>
        </div>
      </div>

      {/* cream bg div */}
      <div className='bg-[#FFF2E6] py-5 mb-[40px]'>
        <div className='max-w-[1140px] w-full mx-auto px-3'>
          <SubHeading className={'!text-[28px] mb-[6px]'} text={pizza?.title} />
          <Description className={''} text={pizza?.description} />
        </div>
      </div>

      <div className='max-w-[1140px] px-3 mx-auto'>
        {/* select size */}
        <div className='max-w-[1140px] mb-[40px]'>
          <SubHeading className={'!text-[24px] mb-4'} text={'Select Size'} />
          <div className='flex gap-6'>
            {Select_Size_Pizza.map((item, index) => {
              const isSelected = selectedSize === index;
              return (
                <div
                  onClick={() => setSelectedSize(index)} // ✅ no null toggle
                  className={`py-4 px-5 rounded-[12px] flex gap-4 items-center max-w-[205px] w-full cursor-pointer transition-all 
                    ${isSelected ? 'border border-[#F77C22] bg-[#FEF7F2]' : 'border border-[#C1C1C1]'}`}
                  key={index}
                >
                  <item.img className={`${isSelected ? 'text-[#F26F1B]' : 'text-[#4D4D4D]'}`} />
                  <div>
                    <p className={`font-medium text-[20px] ${isSelected ? 'text-prime' : 'text-[#4D4D4D]'}`}>
                      {item.name}
                    </p>
                    <p className={`font-regular text-[16px] ${isSelected ? 'text-prime' : 'text-[#4D4D4D]'}`}>{item.serve}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* select crust */}
        <div className={`mb-[40px] cursor-pointer`}>
          <SubHeading className={'!text-[24px] mb-[20px]'} text={'Select Crust'} />
          <div className='flex gap-6'>
            {Select_Crust.map((item, index) => {
              const isSelected = selectedCrust === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedCrust(index)} // ✅ no null toggle
                  className={`max-w-[267px] w-full px-[18px] transition-all py-4 rounded-[8px] ${isSelected ? 'border-[#F77C22] border bg-[#FFF7F2]' : 'border border-[#C1C1C1]'}`}
                >
                  <SubHeading className={`!text-[24px] mb-[12px]`} text={item.name} />
                  <button
                    className={`py-[4px] px-[21px] text-[24px] text-[#4D4D4D] cursor-pointer rounded-[6px] ${isSelected ? 'bg-prime text-white' : 'bg-[#EFEFEF] text-[#4D4D4D]'}`}
                  >
                    {item.price}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* add toppings */}
        <div className='max-w-[778px] mr-auto mb-[40px]'>
          <SubHeading className={'!text-[24px] mb-3'} text={'Add Toppings'} />
          <Description className={'mb-5'} text={'You can add more toppings'} />

          <Tabs>
            <TabList className={'mb-[40px] flex gap-[12px]'}>
              <Tab
                className={'flex gap-[4px] !rounded-[4px] !px-[16px] !py-[8px] outline text-[#2F2F2F] outline-[#C2C2C2] cursor-pointer'}
                selectedClassName='bg-prime text-white outline-none  '
              >
                <img src={veg} alt="veg" className='size-[20px]' />
                <p>Veg</p>
              </Tab>
              <Tab
                className={'flex gap-[4px] !rounded-[4px] !px-[16px] !py-[8px] outline text-[#2F2F2F] outline-[#C2C2C2] cursor-pointer'}
                selectedClassName='bg-prime text-white outline-none  '
              >
                <img src={nonveg} alt="nonveg" className='size-[20px]' />
                <p>Non Veg</p>
              </Tab>
            </TabList>
            <TabPanel>
              <div className='flex justify-between mb-[32px]'>
                <SubHeading className={'!text-[20px]'} text={'Add Veg Toppings @ ₹ 30 each'} />
                <div className='flex gap-[8px]'>
                  <Button
                    className={`!rounded-[50%] prevbtn5 size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''}`}
                  >
                    <Leftcursor />
                  </Button>
                  <Button
                    className={`!rounded-[50%] nextbtn5 size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''}`}
                  >
                    <Rightcursor />
                  </Button>
                </div>
              </div>
              <Swiper
                spaceBetween={24}
                slidesPerView={3}
                modules={[Navigation]}
                navigation={{ prevEl: '.prevbtn5', nextEl: '.nextbtn5' }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={handleSlideChange}
              >
                {Toppings.map((item, index) => {
                  const isSelected = selectedToppings.includes(item.name);
                  return (
                    <SwiperSlide
                      key={index}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedToppings(selectedToppings.filter(t => t !== item.name));
                        } else {
                          setSelectedToppings([...selectedToppings, item.name]);
                        }
                      }}

                    >
                      <p className="font-medium !text-[24px] mb-3">{item.name}</p>
                      <div className="shadow-choose rounded-[12px] overflow-hidden cursor-pointer relative ">
                        <img src={item.img} alt="img" className="object-cover w-full h-[222px]" />
                        <div className="py-[8px] flex gap-[11px] justify-center items-center cursor-pointer">
                          {isSelected ? <Remove /> : <Add_Green />}
                          <p className={isSelected ? "text-[#363636]" : "text-[#13A100]"}>
                            {isSelected ? "Remove" : "Add"}
                          </p>
                          {isSelected && (
                            <div className="size-[24px] bg-[#13A100] rounded-[2.5px] flex items-center justify-center absolute top-0 right-0 m-2">
                              <Tick />
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </TabPanel>
            <TabPanel>
              <SubHeading className={'!text-[20px] mb-[40px]'} text={'Add Non Veg Toppings @ ₹ 80 each'} />
              <div className='flex gap-[24px]'>
                {NonVeg_Topping.map((item, index) => {
                  return (
                    <div className='' key={index}>
                      <p className='font-medium text-[24px] mb-3'>{item.name}</p>
                      <div className='shadow-testinomials rounded-[12px] overflow-hidden w-[243px] cursor-pointer'>
                        <img src={item.img} alt="img" className='object-cover w-full h-[222px]' />
                        <div className='py-[10px] flex items-center gap-[6px] justify-center'>
                          <Add_Green className="" />
                          <p className='text-[#13A100]'>Add</p>
                        </div>
                      </div>
                    </div>
                  )
                }
                )}
              </div>
            </TabPanel>



          </Tabs>
        </div>

        {/* replace toppings */}

        <div className='p-4 border border-[#C2C2C2] rounded-[12px]  mb-[60px]'>
          <SubHeading className={'!text-[24px] mb-[8px]'} text={'Replace Toppings'} />
          <Description className={'text-[#4D4D4D]'} text={'You can replace any one topping'} />
          <div className='mt-3'>
            {Exchange_Data.map((item, index) => {
              return (
                <div key={index} className='flex gap-3 p-1 items-center cursor-pointer mb-1 hover:text-[#7e7e7e]'>
                  <Exchange className={'w-[20px] h-[15px]'} />
                  <Description className={''} text={item.name} />
                </div>
              )
            }
            )}
          </div>
        </div>
      </div>


      {/* green part  */}
      <div className='bg-[#03C200] py-[25px]   '>
        <div className='flex justify-between max-w-[1140px] mx-auto px-3'>
          <div className='flex items-center'>
            <p className='font-bold text-white text-[24px] pr-[10px]  border-r-[2px] border-white '>1 Item</p>
            <p className="text-[24px] font-bold text-white pl-[10px]"> ₹ {finalPrice}</p>
          </div>
          <Link to={'/cart'}>
            <button onClick={handleSave}
              className='border-[2px] border-white text-white rounded-[8px] py-[10px] px-[76px] hover:bg-[#05db01] text-[16px] font-semibold cursor-pointer'>
              Update Cart
            </button>
          </Link>


        </div>
      </div>
    </div>
  )
}

export default Customize