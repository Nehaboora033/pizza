import React from 'react'
import SubHeading from './SubHeading'
import { Cross, Email_Icon, Google } from '../../utils/icon'
import Input from './Input'
import Button from './Button'
import Description from './Description'
import { Link } from 'react-router-dom'

const Login = ({ onClose }) => {
   
    return (
        <div className='fixed inset-0 flex justify-center items-center z-60' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
            <div className='max-w-[574px] w-full px-3 mx-auto'>
                <div className='max-w-[550px] w-full bg-white p-6 rounded-[6px]'>
                    <div className='flex  justify-between mb-4'>
                        <SubHeading className={'text-[32px]'} text={'Log In'} />
                        <button onClick={onClose} className='cursor-pointer'>
                            <Cross />
                        </button>
                    </div>

                    <Input className={'mb-4'} />

                    <Button className='bg-prime w-full mb-4'>Send OTP</Button>
                    <div>
                        <div className='flex items-center mb-4'>
                            <hr className='border-[#EBEBEB] flex-1' />
                            <Description className={'font-semibold mx-[8px]'} text={'Or'} />
                            <hr className='border-[#EBEBEB] flex-1' />
                        </div>

                        <Button className='!text-black flex items-center gap-[10px] border border-[#E0E0E0] rounded-[6px] w-full justify-center mb-[20px]'>
                            <Email_Icon />
                            Continue with Email
                        </Button>
                        <Button className='mb-[60px] border border-[#E0E0E0] rounded-[6px] py-[14px] flex gap-[8px] w-full justify-center '>
                            <Google />
                            <span className='text-black'>Sign in with Google</span>
                        </Button>
                        <hr className='border-[#E0E0E0] mb-4' />

                        <Description className={'!text-[14px] text-[#B9B9B9] roboto'} text={
                            <>
                                New to Pizza Nest ?{' '}
                                <Link className='text-prime'>Create an Account</Link>
                            </>
                        } />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login