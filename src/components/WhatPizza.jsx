import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from './common/Button';
import SubHeading from './common/SubHeading';
import Description from './common/Description';
import { What_Pizza_Data } from '../utils/helper';
import { Leftcursor, Rightcursor } from '../utils/icon';

const WhatPizza = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
      <div className='max-w-[1140px]'>

        {/* Title and Navigation Buttons */}
        <div className='mb-[40px] flex items-center justify-between'>
          <SubHeading text={'What pizza would you like to eat?'} />
          <div className='flex gap-[8px]'>
            {/* Always render buttons — conditionally disable/hide */}
            <Button
              className={`!rounded-[50%] prevbtn size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''
                }`}
            >
              <Leftcursor />
            </Button>
            <Button
              className={`!rounded-[50%] nextbtn size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''
                }`}
            >
              <Rightcursor />
            </Button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          navigation={{
            prevEl: '.prevbtn',
            nextEl: '.nextbtn',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
        >
          {What_Pizza_Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='shadow-whatpizza'>
                <div className='rounded-xl overflow-hidden'>
                  <img src={item.img} alt='img' className='w-full' />
                  <Description
                    className='py-[6px] text-center !text-[20px]'
                    text={item.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatPizza