import React from 'react'
import img from '../assets/webp/whoweareimg.webp'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import img2 from '../assets/webp/Whoweareimg2.webp'

const WhoWeAre = () => {
    return (
        <div className='max-w-[1140px] mx-auto px-3 pb-[100px]'>
            <div className='row flex gap-[55px]'>
                <div className='w-1/2'>
                    <img src={img} alt="img" className='w-full ogject-cover' />
                </div>
                <div className='w-1/2 flex flex-col  justify-center'>
                    <SubHeading className={'mb-4'} text={'Who We Are'} />
                    <Description className={'mb-[6px] text-[#333333s]'} text={'We’re not just a food delivery website — we’re your shortcut to delicious meals, delivered hot and fresh at your doorstep. Whether you are craving cheesy pizza, spicy biryani, juicy burgers, or healthy salads, we bring your favorite restaurants to your fingertips.'} />
                    <Description className={'text=[#333333] mt-4'} text={'At Pizza Nest, we believe great food should be easy to find, simple to order, and fast to arrive. That’s why we’ve partnered with the best local restaurants and top chains to serve you a wide variety of cuisines — anytime, anywhere.'} />

                </div>
            </div>
            <div className='row flex gap-[55px] mt-[100px]'>
                <div className='w-1/2 flex flex-col  justify-center'>
                    <SubHeading className={'mb-4'} text={'Our Mission'} />
                    <Description className={'mb-[6px] text-[#333333s]'} text={'To make food ordering more joyful, reliable, and rewarding — for everyone. We aim to build a platform that celebrates convenience, taste, and community.'} />
                    <Description className={'text=[#333333] mt-2'} text={'But it’s more than just delivering food — We’re here to bring people together through flavors they love, simplify everyday mealtime decisions, and empower local restaurants and kitchens to grow.'} />
                    <Description className={'text=[#333333] mt-2'} text={'We believe food should arrive not only fast and fresh, but with care, consistency, and a touch of delight. Whether it is your daily lunch, late-night cravings, or weekend feasts with friends — we’re on a mission to become your most trusted food partner.'} />


                </div>
                <div className='w-1/2'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre