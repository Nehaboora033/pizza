import React from 'react'
import { GALLERY_DATA } from '../utils/helper'

const OurGallery = () => {
    return (
        <div id='gallery' className='px-5 py-[50px] md:py-25 relative'>
            <div className="flex xl:flex-row flex-col items-center md:gap-6 gap-4">
                <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                    {
                        GALLERY_DATA.slice(0, 2).map((image, i) => (
                            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center md:gap-6 gap-4 w-full flex-col max-w-[558px]">
                    {
                        GALLERY_DATA.slice(2, 3).map((image, i) => (
                            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                            </div>
                        ))
                    }
                    <div className="xl:flex hidden justify-center items-center md:gap-6 gap-4">
                        {
                            GALLERY_DATA.slice(3, 5).map((image, i) => (
                                <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                    {
                        GALLERY_DATA.slice(5, 8).map((image, i) => (
                            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                            </div>
                        ))
                    }
                </div>
                <div className="max-sm:hidden flex xl:hidden justify-center items-center w-full md:gap-6 gap-4">
                    {
                        GALLERY_DATA.slice(3, 5).map((image, i) => (
                            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex sm:hidden justify-center items-center w-full md:gap-6 gap-4">
                    {
                        GALLERY_DATA.slice(3, 4).map((image, i) => (
                            <div key={i} className="overflow-hidden rounded-xl group cursor-pointer w-full">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex xl:hidden md:gap-6 gap-4 justify-center items-center">
                    <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                        {
                            GALLERY_DATA.slice(0, 2).map((image, i) => (
                                <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                        {
                            GALLERY_DATA.slice(5, 8).map((image, i) => (
                                <div key={i} className="overflow-hidden rounded-xl group cursor-pointer">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' src={image} alt="gallery-img" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGallery