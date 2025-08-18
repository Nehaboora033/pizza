import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import { Cross, Google } from '../../utils/icon'
import Input from './Input'
import Description from './Description'
import { Link } from 'react-router-dom'

const SignUpModal = ({ onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({ fullName: '', email: '' })
    const [errors, setErrors] = useState({});

    // Validation
    const validate = () => {
        let tempErrors = {}
        if (!formData.fullName.trim()) {
            tempErrors.fullName = "Full Name is required"
        }
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Enter a valid email address"
        }
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' }) // clear error as user types
    }

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log("Form submitted:", formData)

        }
    }
    // to stop the behind page to scroll 
    useEffect(() => {
        // Disable background scroll
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when modal closes/unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50"
            style={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                // backdropFilter: 'blur(6px)',
                // WebkitBackdropFilter: 'blur(6px)'
            }}>
            {/* Modal box */}
            <div className='max-w-[574px] px-3 mx-auto w-full'>
                <div className='p-[24px] rounded-[6px] max-w-[550px] w-full bg-white relative'>
                    <div className='flex items-center justify-between w-full mb-[20px]'>
                        <SubHeading className={'!text-[32px] roboto'} text={'Sign Up'} />
                        <button onClick={onClose} className='cursor-pointer'>
                            <Cross />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder={'Full Name'}
                                type='text'
                                className={'!p-3 !rounded-[6px] mb-4 placeholder:text-[#B9B9B9]'}
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mb-[12px]">{errors.fullName}</p>
                            )}
                        </div>

                        <div>
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={'Email'}
                                type='email'
                                className={'!p-3 !rounded-[6px] mb-[20px] placeholder:text-[#B9B9B9]'}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mb-[12px]">{errors.email}</p>
                            )}
                        </div>

                        <div className='flex gap-[6px] mb-[28px]'>
                            <input type="checkbox" className='size-[20px]' />
                            <Description
                                className={'!text-[14px] roboto max-w-[380px] text-[#B9B9B9]'}
                                text={
                                    <>
                                        I agree to Pizza Nest’s{" "}
                                        <Link to={'terms'} className='text-prime'>Terms of Service, Privacy Policy</Link>
                                        {" "}and
                                        <Link to={'policy'} className='text-prime'> Content Policies</Link>
                                    </>
                                }
                            />
                        </div>

                        <button type="submit" className='bg-[#CDCDCD] py-4 text-white cursor-pointer hover:shadow-md rounded-[12px] w-full mb-[20px] '>
                            Create Account
                        </button>
                    </form>

                    <div className='flex items-center mb-4'>
                        <hr className='border-[#EBEBEB] flex-1' />
                        <Description className={'font-semibold mx-[8px]'} text={'Or'} />
                        <hr className='border-[#EBEBEB] flex-1' />
                    </div>

                    <button className='border border-[#E0E0E0] rounded-[6px] hover:shadow-md cursor-pointer py-[14px] flex gap-[8px] w-full justify-center mb-[60px]'>
                        <Google />
                        <span className='text-black'>Sign in with Google</span>
                    </button>

                    <hr className='border-[#EBEBEB] mb-[20px]' />
                    <Description
                        className={'text-[#838383] !text-[14px] roboto'}
                        text={
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={onSwitchToLogin} //  switch to login modal
                                    className="text-[14px] roboto font-medium text-prime cursor-pointer"
                                >
                                    Login
                                </button>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUpModal