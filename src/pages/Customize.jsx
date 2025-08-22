import React, { useRef, useState } from 'react'
import backgroundImage from "../assets/webp/customizeheroimg.webp"
import veg from '../assets/png/veg.png'
import SubHeading from '../components/common/SubHeading'
import Description from '../components/common/Description'
import { Select_Crust, Select_Size_Pizza, Toppings } from '../utils/helper'
import Button from '../components/common/Button'
import { Add_Green, Leftcursor, Remove, Replace_Topping_Arrow, Rightcursor, Tick } from '../utils/icon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'



const Customize = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCrust, setSelectedCrust] = useState(null);
  const [selectedTopping, setSelectedTopping] = useState(null);

  return (
    <div>
      <div className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex gap-[8px] pt-[388px] pb-4 max-w-[1140px] w-full mx-auto px-3'>
          <img src={veg} alt="veg" className='size-[28px] ' />
          <p className='text-white font-semibold text-[24px]'>₹ 289</p>
        </div>
      </div>
      {/* cream bg div */}
      <div className='bg-[#FFF2E6] py-5 mb-[40px]'>
        <div className='max-w-[1140px] w-full mx-auto px-3'>
          <SubHeading className={'!text-[28px] mb-[6px]'} text={'Pappy Paneer'} />
          <Description className={''} text={'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika'} />
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
                <div onClick={() => setSelectedSize(isSelected?null:index)} className={` py-4 px-5 rounded-[12px] flex gap-4 items-center max-w-[205px] w-full cursor-pointer transition-all  ${isSelected ? 'border border-[#F77C22] bg-[#FEF7F2] text-prime' : ' border border-[#C1C1C1] '}`} key={index}>
                  <item.img className={`${isSelected ? 'text-[#F26F1B]' : 'text-[#4D4D4D]'}`} />
                  <div>
                    <p className='font-medium text-[20px]'>{item.name} </p>
                    <p className='font-regular text-[16px] text-[#4D4D4D]'>{item.serve} </p>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>

        {/* select curest */}
        <div className={`mb-[40px] cursor-pointer`}>
          <SubHeading className={'!text-[24px] mb-[20px]'} text={'Select Crust'} />
          <div className='flex gap-6'>
            {Select_Crust.map((item, index) => {
              const isSelected = selectedCrust === index;
              return (
                <div key={index} onClick={() =>
                  setSelectedCrust(isSelected ? null : index) // ✅ toggle
                } className={`'max-w-[267px] w-full px-[18px] transition-all py-4  rounded-[8px] ${isSelected ? 'border-[#F77C22] border bg-[#FFF7F2]' : 'border border-[#C1C1C1]'} `}>
                  <SubHeading className={`!text-[24px] mb-[12px] `} text={item.name} />
                  <button className={`py-[4px] px-[21px] text-[24px] text-[#4D4D4D] cursor-pointer  rounded-[6px] ${isSelected ? 'bg-prime text-white' : 'bg-[#EFEFEF] text-[#4D4D4D]'}`}>{item.price} </button>
                </div>
              )
            }
            )}
          </div>
        </div>

        {/* add toppings */}
        <div className='max-w-[778px] mr-auto mb-[40px] '>
          <SubHeading className={'!text-[24px] mb-3'} text={'Add Toppings'} />
          <Description className={'mb-5'} text={'You can add more toppings'} />
          <div className='flex justify-between mb-[32px]'>
            <SubHeading className={'!text-[20px]'} text={'Add Veg Toppings @ ₹ 30 each'} />
            <div className='flex gap-[8px]'>
              {/* Always render buttons — conditionally disable/hide */}
              <Button
                className={`!rounded-[50%] prevbtn5 size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''
                  }`}
              >
                <Leftcursor />
              </Button>
              <Button
                className={`!rounded-[50%] nextbtn5 size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''
                  }`}
              >
                <Rightcursor />
              </Button>
            </div>
          </div>
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={{
              prevEl: '.prevbtn5',
              nextEl: '.nextbtn5',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
          >
            {Toppings.map((item, index) => {
              const isSelected = selectedTopping === index;
              return (
                <SwiperSlide key={index}>
                  <p className='font-medium !text-[24px] mb-3'>{item.name}</p>
                  <div
                    onClick={() =>
                      setSelectedTopping(isSelected ? null : index) // toggle select
                    }
                    className="shadow-choose rounded-[12px] overflow-hidden cursor-pointer relative"
                  >
                    <img src={item.img} alt="img" className='object-coveer w-full' />
                    <div className="py-[8px] flex gap-[11px] justify-center items-center cursor-pointer transition-colors duration-300">
                      {/* Swap icon based on state */}
                      {isSelected ? <Remove /> : <Add_Green />}

                      {/* Swap text based on state */}
                      <p className={isSelected ? "text-[#363636]" : "text-[#13A100]"}>
                        {isSelected ? "Remove" : "Add"}
                      </p>
                      {/* selected green box */}
                      {isSelected && (
                        <div className="size-[24px] bg-[#13A100] rounded-[2.5px] flex items-center justify-center absolute top-0 right-0 m-2">
                          <Tick />
                        </div>
                      )}
                    </div>
                  </div>

                </SwiperSlide>
              )
            }
            )}
          </Swiper>
        </div>
        {/* replace toppings */}
        <div className='p-4 border border-[#C2C2C2] rounded-[12px] flex justify-between items-center mb-[60px]'>
          <div className=''>
            <SubHeading className={'!text-[24px] mb-[8px]'} text={'Replace Toppings'} />
            <Description className={'text-[#4D4D4D]'} text={'You can replace any one topping'} />
          </div>
          <Replace_Topping_Arrow className={'cursor-pointer'} />
        </div>

      </div>
    </div>
  )
}

export default Customize