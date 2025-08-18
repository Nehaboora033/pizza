import React, { useState } from 'react'
import SubHeading from './SubHeading'
import { Cross, Email_Icon, Google } from '../../utils/icon'
import Description from './Description'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = ({ onClose, onSwitchToSignUp }) => {
    const [phone, setPhone] = useState("");

    return (
        <div className='fixed inset-0 flex justify-center items-center z-60' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
            <div className='max-w-[574px] w-full px-3 mx-auto'>
                <div className='max-w-[550px] w-full bg-white p-6 rounded-[6px]'>
                    <div className='flex  justify-between mb-4'>
                        <SubHeading className={'!text-[32px] roboto'} text={'Log In'} />
                        <button onClick={onClose} className='cursor-pointer'>
                            <Cross />
                        </button>
                    </div>
                    <PhoneInput
                        country={"in"}   // default India
                        value={phone}
                        onChange={setPhone}
                        inputStyle={{ width: "100%", height: "50px" }}
                        containerStyle={{ marginBottom: "24px" }}
                        
                    />
                    <button className='bg-prime w-full mb-4 py-4 hover:shadow-lg rounded-[12px] text-white cursor-pointer'>Send OTP</button>
                    <div>
                        <div className='flex items-center mb-4'>
                            <hr className='border-[#EBEBEB] flex-1' />
                            <Description className={'font-semibold mx-[8px]'} text={'Or'} />
                            <hr className='border-[#EBEBEB] flex-1' />
                        </div>

                        <button className='!text-black hover:shadow-md flex items-center py-[13px] cursor-pointer gap-[10px] border border-[#E0E0E0] rounded-[6px] w-full justify-center mb-[20px]'>
                            <Email_Icon />
                            Continue with Email
                        </button>
                        <button className='mb-[60px] border cursor-pointer hover:shadow-md border-[#E0E0E0] rounded-[6px] py-[14px] flex gap-[8px] w-full justify-center '>
                            <Google />
                            <span className='text-black'>Sign in with Google</span>
                        </button>
                        <hr className='border-[#E0E0E0] mb-4' />

                        <Description
                            className={'!text-[14px] text-[#B9B9B9] roboto'}
                            text={
                                <>
                                    New to Pizza Nest ?{" "}
                                    <button onClick={onSwitchToSignUp} className="text-prime">
                                        Create an Account
                                    </button>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login