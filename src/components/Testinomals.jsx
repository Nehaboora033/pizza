import React from 'react'
import backgroundImage from '../assets/webp/bestsellerbg.webp'
import Title from './common/Title'
import { ArrowLeft, ArrowRight, LeftLine, RightLine } from '../utils/icon'
import SubHeading from './common/SubHeading'
import img from '../assets/png/testinomalsprofileimg.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Description from './common/Description'
import { Testimonial_Data } from '../utils/helper'
import image from '../assets/webp/testinomialsbg.webp'
import Button from './common/Button'
import { Navigation } from 'swiper/modules'
import upcolon from '../assets/png/upwardsemicolon.png'
import downcolon from '../assets/png/downssenicolon.png'


const Testinomals = () => {
  return (
    <div
      className='bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='max-w-[1140px] px-3 mx-auto pt-[100px] pb-[200px]'>
        <Title>
          <LeftLine />
          Testimonial
          <RightLine />
        </Title>
        <SubHeading className='text-center mb-[60px]' text='What Our Customers Say' />
        <div className='relative'>
          <img src={img} alt='img' />
          <div
            className="absolute bottom-[-100px] right-0  mx-auto ">

            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{
                nextEl: '.nextBtn',
                prevEl: '.prevBtn',
              }}
              className="shadow-testinomials bg-white rounded-xl max-w-[680px] min-h-[298px] relative"
            >
              <img src={upcolon} alt="img" className=' opacity-10 absolute top-0 left-[10px] ' />
              <img src={downcolon} alt="img" className='opacity-10 absolute top-[35%] right-[150px]' />
              {Testimonial_Data.map((item, index) => (
                <SwiperSlide className="p-6" key={index} >
                  <Description className={'text-[#545454] mb-4'} text={item.description} />
                  <SubHeading className="!text-[24px]" text={item.name} />
                  <Description className={'text-[#545454]'} text={item.profession} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex items-center absolute z-1 bottom-6 left-6 mt-6 gap-1">
              <Button className="prevBtn !rounded-[4px] !px-[15px] bg-[#EEEEEE] !py-3.5 flex items-center justify-center transition">
                <ArrowLeft />
              </Button>
              <Button className="nextBtn bg-prime !rounded-[4px] flex items-center justify-center !px-[15px] !py-3.5 transition">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testinomals