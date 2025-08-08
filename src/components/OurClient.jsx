import React, { useRef, useState } from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { OurClient_Data, Profile } from '../utils/helper'
import backgroundImage from '../assets/webp/ourclientbg.webp'
import rating from '../assets/png/clientrating.png'
import { Link } from 'react-router-dom'
import { ClientArrow, LearnArrow } from '../utils/icon'
import Button from './common/Button'

import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const OurClient = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(3);
  const swiperRef = useRef(null);
  return (
    <div className='bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1164px] mx-auto px-3 py-[100px]'>
        <div className='max-w-[1140px]'>
          <SubHeading className={'text-center'} text={'What Our Clients Say?'} />
          <Description
            className={'text-center text-[#373737] max-w-[768px] w-full mx-auto mt-[16px] mb-[40px]'}
            text={
              'Real stories. Real flavors. Hear what our happy customers have to say about their pizza experience — from first bites to last crumbs, satisfaction is guaranteed.'
            }
          />
        </div>

        <Swiper
          slidesPerView={8}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          initialSlide={3} // ✅ Set initial index
          centeredSlides={true} // ✅ Required for center mode
          onSwiper={setThumbsSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          navigation={false}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="relative !py-[85px] !px-5 mySwiper"
        >
          {Profile.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='client-slide'>
                <img
                  src={item.img}
                  alt="profile"
                  className={' transition-all duration-300 mx-auto '}
                />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons placed BEFORE Swiper */}
        <div className='relative '>
          <Button
            className='prevbtn4 size-[46px] bg-white justify-center items-center !py-0 !px-0 rounded-[50%] flex absolute top-[50%] left-[50px] rotate-180 z-10'
          >
            <ClientArrow />
          </Button>
          <Button
            className='nextbtn4 size-[46px] bg-white justify-center items-center !py-0 !px-0 rounded-[50%] flex absolute top-[50%] right-[50px] z-10'
          >
            <ClientArrow />
          </Button>
          {/* Swiper must be below the buttons in the DOM */}
          <Swiper
            modules={[Navigation, FreeMode, Thumbs]}
            slidesPerView={1}
            initialSlide={3}
            centeredSlides={true}
            navigation={{
              nextEl: '.nextbtn4',
              prevEl: '.prevbtn4',
            }}
            speed={700}
            thumbs={{ swiper: thumbsSwiper }}
            className='overflow-hidden mySwiper2'
          >
            {OurClient_Data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='max-w-[751px] p-[40px] mx-auto mt-[50px] rounded-[24px] bg-white'>
                  <SubHeading className={'!text-[20px] text-center mb-[8px]'} text={item.name} />
                  <Description className={'mb-[12px] text-center'} text={item.role} />
                  <img src={rating} alt='rating' className='mb-4 mx-auto' />
                  <Description className={'mb-5 text-center'} text={item.description} />
                  <Link to={''} className='flex items-center gap-[4px] justify-center'>
                    <Description className={'text-[#20527A] font-medium'} text={'Learn More'} />
                    <LearnArrow />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default OurClient