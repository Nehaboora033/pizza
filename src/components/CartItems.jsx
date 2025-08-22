import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { AddCount, Customize_Icon, Delete } from '../utils/icon'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartItems = () => {
    const { cartItems, removeFromCart } = useCart();
    const [counts, setCounts] = useState({}); // keep count per item

    const handleDecrease = (title) => {
        setCounts((prev) => {
            const newCount = (prev[title] || 1) - 1;
            return { ...prev, [title]: newCount > 0 ? newCount : 1 };
        });
    };

    const handleIncrease = (title) => {
        setCounts((prev) => {
            const newCount = (prev[title] || 1) + 1;
            return { ...prev, [title]: newCount };
        });
    };

    if (cartItems.length === 0) {
        return <p className="text-center text-lg mt-6">🛒 Your cart is empty</p>;
    }

    return (
        <div className='flex flex-col gap-4'>
            {cartItems.map((item, index) => (
                <div key={index} className='max-w-[722px] p-3 rounded-[8px] shadow-testinomials'>
                    <div className='flex gap-[12px] relative'>
                        <div>
                            <img src={item.img} alt={item.title} className='w-[139px] h-[133px] rounded-[4px]' />
                        </div>
                        <Link
                            to={'/cart/customize'}
                            className='size-[18px] bg-white flex items-center cursor-pointer justify-center rounded-[2px] absolute top-[59%] right-[84%]'
                        >
                            <Customize_Icon />
                        </Link>
                        <div className=' w-full'>
                            <div className='flex justify-between'>
                                <SubHeading className={'!text-[24px] mb-[4px]'} text={item.title} />
                                <p className='font-semibold text-[20px]'>{item.price}</p>
                            </div>
                            <div className='flex justify-between'>
                                <Description
                                    className={'mb-[6px] max-w-[322px]'}
                                    text={item.description}
                                />

                                {/* counter button */}
                                <div className="flex items-center">
                                    <div
                                        className="border border-[#E0E0E0] h-[30px] flex items-center px-[5px] cursor-pointer"
                                        onClick={() => handleDecrease(item.title)}
                                    >
                                        <Delete />
                                    </div>

                                    <div className="border-l-0 border border-r-0 border-[#E0E0E0] h-[30px] px-5 py-1 font-semibold text-[18px]">
                                        {counts[item.title] || 1}
                                    </div>

                                    <div
                                        className="bg-black h-[30px] flex items-center px-[7px] cursor-pointer"
                                        onClick={() => handleIncrease(item.title)}
                                    >
                                        <AddCount />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mb-[13px]'>
                                <Description className={'!font-medium mr-[11px]'} text={'Regular'} />
                                <div className='w-[2px] bg-black h-[17px]'></div>
                                <Description className={'!font-medium ml-[11px]'} text={'Cheese Burst'} />
                            </div>
                            <div className='border-dashed border w-[550px] mb-[11px]'></div>

                            <div>
                                <Description className={'text-prime font-semibold cursor-pointer mb-[6px]'} text={'Your Customisation'} />
                                <Description text="Added Toppings : Red Pepper" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems