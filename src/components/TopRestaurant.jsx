import React, { useRef, useState } from 'react'
import SubHeading from './common/SubHeading'
import { Restaurant } from '../utils/helper'
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Leftcursor, Rightcursor, Star } from '../utils/icon';
import Button from './common/Button';
import Description from './common/Description';

const TopRestaurant = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
      <div className='max-w-[1140px] '>
        <div className='flex justify-between'>
          <SubHeading className={'text-[40px] mb-[40px]'} text={'Top Restaurants in Hisar'} />
          {/* buttons */}
          <div className='flex gap-[8px]'>
            {/* Always render buttons — conditionally disable/hide */}
            <Button
              className={`!rounded-[50%] prevbtn3 size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''
                }`}
            >
              <Leftcursor />
            </Button>
            <Button
              className={`!rounded-[50%] nextbtn3 size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''
                }`}
            >
              <Rightcursor />
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          navigation={{
            prevEl: '.prevbtn3',
            nextEl: '.nextbtn3',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          className='!p-3'
        >
          {Restaurant.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='shadow-whatpizza rounded-xl overflow-hidden cursor-pointer'>
                <img src={item.img} alt='img' className='w-full ' />
                <div className='p-[12px] flex justify-between'>
                  <div className=''>
                    <Description className={'mb-[6px] !font-bold'} text={item.title} />
                    <Description className={'!text-[12px]'} text={item.description} />
                  </div>
                  <div className='bg-[#15803D] h-[20px] rounded-[2px] py-[2px] px-[6px] flex items-center gap-[2px]  '>
                    <Star />
                    <Description className='text-white !text-[12px]' text={item.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopRestaurant