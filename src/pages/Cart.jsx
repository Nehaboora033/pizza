import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Description from '../components/common/Description';
import dominos from '../assets/png/dominoscartimg.png';
import SubHeading from '../components/common/SubHeading';
import rating from '../assets/svg/dominosrating.svg';
import { ArrowCart, CartAddress, CartOffer, Check } from '../utils/icon';
import Button from '../components/common/Button';
import CartSwiper from '../components/CartSwiper';
import CartItems from '../components/CartItems';
import { Cart_Payment_Method } from '../utils/helper';
import { useCart } from '../context/CartContext';
import { parsePrice } from '../utils/price';

const Cart = () => {
    const [selected, setSelected] = useState("");
    const { cartItems } = useCart();
    const [counts, setCounts] = useState({});

    // ✅ Subtotal already includes toppings (price is final from context)
    const subtotal = cartItems.reduce((acc, item) => {
        const price = parsePrice(item.price);
        const qty = counts[item.title] || 1;
        return acc + price * qty;
    }, 0);

    const taxes = 41;
    const grandTotal = subtotal + taxes;

    return (
        <div className='max-w-[1140px] px-3 mx-auto'>
            <div className='flex justify-between mb-[40px] mt-[60px]'>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <p className="font-medium text-[18px]">
                        {cartItems.length}{" "}
                        {cartItems.length === 1 ? "item" : "items"} you have selected
                    </p>
                )}
                <Link className={'text-prime cursor-pointer'} to={'/menu'}>
                    Explore Menu
                </Link>
            </div>

            {/* banner dominos */}
            <div className='p-4 shadow-teamcard rounded-[12px] flex justify-between mb-[40px]'>
                <div className='flex gap-[24px]'>
                    <img src={dominos} alt="image" />
                    <div className='flex flex-col justify-center'>
                        <SubHeading className={'!text-[36px] mb-[8px]'} text={'Domino’s Pizza'} />
                        <p className='font-medium text-[20px] mb-[4px]'>Pizza, Fast Food, Beverages</p>
                        <Description className={'text-[#4D4D4D]'} text={'Domino’s Pizza, Shop No. 3, Main Market, Mehta Nagar, Hisar, Haryana – 125001'} />
                    </div>
                </div>
                <div className='flex gap-[7px] h-fit mt-[35px]'>
                    <div className='flex items-center '><img src={rating} alt="rating" className='w-[58px] h-[26px] ' /></div>
                    <div>
                        <p className='font-medium text-[14px] mb-[2px]'>12,300</p>
                        <p className='font-light text-[14px] text-[#4D4D4D]'>Delivery Rating</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-[16px]'>
                {/* Left part */}
                <div className='flex-1 max-w-[722px] w-full m-3'>
                    <CartItems counts={counts} setCounts={setCounts} />
                    <CartSwiper />
                </div>

                {/* Right part */}
                <div className='max-w-[380px] w-full m-3 '>
                    {/* card delivery address */}
                    <div className='shadow-whatpizza p-3 rounded-[6px] mb-[20px] '>
                        <SubHeading className={' !font-bold !text-[20px] leading-[150%] mb-3'} text={'Choose a Delivery Address'} />
                        <div className='flex justify-between'>
                            <div className='flex gap-[8px] h-fit'>
                                <div className='flex items-center'>
                                    <div className='size-[34px] flex items-center justify-center bg-prime rounded-[4px]'>
                                        <CartAddress />
                                    </div>
                                </div>
                                <div>
                                    <SubHeading className='font-semibold !text-[16px]' text={'Current Address'} />
                                    <p className='font-medium text-[16px]'> Hisar</p>
                                </div>
                            </div>
                            <Button className='!py-[8px] bg-prime !px-4 h-fit'>Change</Button>
                        </div>
                    </div>

                    {/* card offer */}
                    <div className='shadow-whatpizza p-3 rounded-[6px] mb-[20px]'>
                        <SubHeading className={'!text-[20px] mb-3'} text={'Offer'} />
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[8px]'>
                                <div className='flex items-center'>
                                    <div className='flex items-center justify-center bg-prime size-[34px] rounded-[4px]'>
                                        <CartOffer />
                                    </div>
                                </div>
                                <div>
                                    <SubHeading className={'!text-[16px] font-semibold'} text={'Select offer'} />
                                    <Description className={'font-medium text-[14px]'} text={'Get discount with your order'} />
                                </div>
                            </div>
                            <ArrowCart className={'cursor-pointer mr-3'} />
                        </div>
                    </div>

                    {/* card payment method */}
                    <div className="shadow-whatpizza p-3 rounded-[6px] mb-[20px]">
                        <SubHeading className="!text-[20px] mb-[18px]" text="Select Payment Methods" />
                        {Cart_Payment_Method.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(item.id)}
                                className={`flex items-center gap-[8px] mb-3 cursor-pointer p-2 rounded-[6px] transition`}
                            >
                                <div
                                    className={`w-[20px] h-[20px]  rounded-[4px] flex items-center justify-center 
                                        ${selected === item.id ? 'bg-prime' : ' border border-[#E1E1E1]'}`}
                                >
                                    <Check />
                                </div>
                                <span className="text-[16px]">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* card price detail */}
                    <div className='shadow-testinomials rounded-[6px] p-3'>
                        <SubHeading className={'!text-[20px] mb-4'} text={'Price Detail'} />
                        <div className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-[18px] '>Sub Total</p>
                            <p className='font-medium text-[18px]'>₹ {subtotal}</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-[18px] '>Discount</p>
                            <p className='font-medium text-[18px]'>-</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='font-semibold text-[18px] '>Taxes and Charges</p>
                            <p className='font-medium text-[18px]'>₹ {taxes}</p>
                        </div>
                        <div className='bg-[#E7E7E7] h-[1px]'></div>
                        <div className='flex items-center justify-between mt-3 mb-4'>
                            <p className='font-bold text-[18px]'>Grand Total</p>
                            <p className='font-medium text-[18px]'>₹ {grandTotal}</p>
                        </div>
                        <Button className='bg-prime w-full'> Place Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;