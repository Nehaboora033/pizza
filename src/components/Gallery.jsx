import React from 'react'
import Title from './common/Title'
import { LeftLine, RightLine } from '../utils/icon'
import SubHeading from './common/SubHeading'
import img1 from '../assets/webp/galleryimg1.webp'
import img2 from '../assets/webp/galleryimg2.webp'
import img3 from '../assets/webp/galleryimg3.webp'
import img4 from '../assets/webp/galleryimg4.webp'
import img5 from '../assets/webp/galleryimg5.webp'
import img6 from '../assets/webp/galleryimg6.webp'
import img7 from '../assets/webp/galleryimg7.webp'
import Button from './common/Button'

const Gallery = () => {
    return (
        <div className='max-w-[1164px] px-3 mx-auto py-[100px] '>
                  {/* ✅ Added title of the secction */}
            <Title >
                <LeftLine />
                Our Gallery
                <RightLine />
            </Title>
            <SubHeading className={'max-w-[568px] text-center mx-auto mb-[40px]'} text={'A Glimpse Into Our Pizza World'} />
            <div className='flex gap-6 mt-[40px] mb-[32px]  '>
                <div className='gap-6 flex flex-col overflow-hidden'>
                    <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img1}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img2}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-6 overflow-hidden'>
                  <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img3}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                    <div className='flex gap-6'>
                       <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img4}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                        <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img5}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img6}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                   <div className="overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img7}
                            alt="img"
                            className='object-cover w-full h-full group-hover:scale-110 transition-all duration-500'
                        />
                    </div>
                </div>
            </div>
            <Button className={'flex mx-auto bg-prime'}>View More </Button>
        </div>
    )
}

export default Gallery