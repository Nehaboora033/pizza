import React, { useRef, useState } from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Brands } from '../utils/helper'
import { Leftcursor, Rightcursor, Star, Time } from '../utils/icon'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Button from './common/Button'

const TopBrand = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className='bg-[#F9FAFB]'>
      <div className='max-w-[1164px] px-3 mx-auto py-[100px] ]'>
        <div className='max-w-[1140px]'>
          <div className='mb-[6px] flex justify-between items-center'>
            <SubHeading className={'text-[40px]'} text={'Top Brands For You'} />
            <div className='flex gap-[8px]'>
              <Button
                className={`!rounded-[50%] prevbtn2 size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''
                  }`}
              >
                <Leftcursor />
              </Button>
              <Button
                className={`!rounded-[50%] nextbtn2 size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''
                  }`}
              >
                <Rightcursor />
              </Button>
            </div>
          </div>
          <Description className={'mb-[40px]'} text={'Based on your location in Hisar'} />
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            modules={[ Navigation ]}
            navigation={{
              prevEl: '.prevbtn2',
              nextEl: '.nextbtn2',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            className='!p-3 '
          >
            {Brands.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=' rounded-[8px] pt-[12px] shadow-whatpizza cursor-pointer'>
                  <div className='flex gap-[16px]'>
                    <div className='rounded-[4px] bg-[#F9FAFB] ml-[12px]'>
                      <img src={item.img} alt="img" className='size-[72px]' />
                    </div>
                    <div>
                      <p className='font-bold text-[16px] mb-[4px] '>{item.title} </p>
                      <div className='flex  gap-[8px]'>
                        <div className='bg-[#15803D] h-[20px] rounded-[2px] py-[2px] px-[6px] flex items-center gap-[2px]  '>
                          <Star />
                          <Description className='text-white !text-[12px]' text={item.rating} />
                        </div>
                        <div className='flex items-center gap-[4px]'>
                          <Time />
                          <Description className='!text-[12px]' text={item.time} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[9px] px-[20px] whitespace-nowrap !text-[12px]  text-[#EA580C] bg-[#FFF2E6] mt-[12px]'>
                    {item.offer}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TopBrand