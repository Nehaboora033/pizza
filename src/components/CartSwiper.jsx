import React, { useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import SubHeading from './common/SubHeading';
import Button from './common/Button';
import { Add, Leftcursor, Rightcursor } from '../utils/icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Cart_Swiper_Data } from '../utils/helper';

const CartSwiper = () => {

    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };


    return (
        <div className='max-w-[722px] mt-[40px]'>
            <div className='flex justify-between items-center mb-[24px]'>
                <SubHeading className={'!text-[28px]'} text={'Complete Your Meal'} />
                <div className='flex gap-[8px]'>
                    {/* Always render buttons — conditionally disable/hide */}
                    <Button
                        className={`!rounded-[50%] prevbtn4 size-[36px] !py-0 !px-0 flex justify-center items-center bg-[#F3F4F6] !text-black transition-all duration-200 ${isBeginning ? 'opacity-0 pointer-events-none' : ''
                            }`}
                    >
                        <Leftcursor />
                    </Button>
                    <Button
                        className={`!rounded-[50%] nextbtn4 size-[36px] !py-0 !px-0 flex justify-center items-center bg-prime transition-all duration-200 ${isEnd ? 'opacity-0 pointer-events-none' : ''
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
                    prevEl: '.prevbtn4',
                    nextEl: '.nextbtn4',
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={handleSlideChange}
            >
                {Cart_Swiper_Data.map((item, index) => (
                    <SwiperSlide key={index} >
                        <div className='rounded-[12px] shadow-cartswiper overflow-hidden w-full relative'>
                            <img src={item.img} alt="img" className='w-full' />
                            <div className='flex justify-between w-[200px] p-3  absolute bottom-[54px] pb-[11px] left-0'>
                                <p className='font-medium text-[18px] text-white'>{item.name} </p>
                                <p className='font-medium text-[18px] text-white'>{item.price} </p>
                            </div>
                            <div className='flex gap-[6px] items-center justify-center py-[8px] cursor-pointer'>
                                <Add />
                                <p className='font-medium text-[24px]'>Add</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CartSwiper