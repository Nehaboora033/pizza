import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { AddCount, Customize_Icon, Delete, Remove } from '../utils/icon'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { parsePrice } from '../utils/price'

const CartItems = ({ counts, setCounts }) => {
    const { cartItems, removeFromCart } = useCart();

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
                        <div className="relative">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[180px] h-[130px] rounded-[4px]"
                            />

                            <Link
                                to={'/cart/customize'}
                                state={{ pizza: item }}
                                className="size-[18px] absolute right-0 bottom-[56px] m-1 bg-white rounded-[2px] flex items-center justify-center"
                            >
                                <Customize_Icon />
                            </Link>
                        </div>
                        <div className=' w-full'>
                            <div className='flex justify-between'>
                                <SubHeading className={'!text-[24px] mb-[4px]'} text={item.title} />
                                <p className='font-semibold text-[20px]'>
                                    ₹{parsePrice(item.price) * (counts[item.title] || 1)}
                                </p>
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
                                        onClick={() => {
                                            const currentCount = counts[item.title] ?? 1;

                                            if (currentCount > 1) {
                                                handleDecrease(item.title);
                                            } else {
                                                removeFromCart(item.title);
                                                setCounts(prev => {
                                                    const next = { ...prev };
                                                    delete next[item.title];
                                                    return next;
                                                });
                                            }
                                        }}
                                    >
                                        {(counts[item.title] ?? 1) > 1 ? <Remove /> : <Delete />}
                                    </div>

                                    <div className="border-l-0 border border-r-0 border-[#E0E0E0] h-[30px] px-5 py-1 font-semibold text-[18px]">
                                        {counts[item.title] ?? 1}
                                    </div>

                                    <div
                                        className="bg-black h-[30px] flex items-center px-[7px] cursor-pointer"
                                        onClick={() => handleIncrease(item.title)}
                                    >
                                        <AddCount />
                                    </div>
                                </div>
                            </div>

                            {/* customise part */}
                            <div className='flex items-center mb-[13px]'>
                                <Description className={'!font-medium mr-[11px]'} text={item.size || 'Regular'} />
                                <div className='w-[2px] bg-black h-[17px]'></div>
                                <Description className={'!font-medium ml-[11px]'} text={item.crust || 'New Hand Tossed'} />
                            </div>

                            {item.customizations && item.customizations.length > 0 && (
                                <>
                                    <div className='border-dashed border w-[550px] mb-[11px]'></div>
                                    <div>
                                        <Description
                                            className={'text-prime font-semibold cursor-pointer mb-[6px]'}
                                            text={'Your Customisation'}
                                        />
                                        <p className="text-sm text-gray-600">
                                            {item.customizations.join(", ")}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems;