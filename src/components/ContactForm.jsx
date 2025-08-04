import React from 'react'
import Input from './common/Input'
import Button from './common/Button'

const ContactForm = () => {
  return (
    <div className='max-w-[948px] px-3 mx-auto pt-[100px]'>
      <div className='max-w-[924px] w-full px-3 '>
        <div className=' shadow-choose rounded-[20px] p-[40px]'>
          <form className='space-y-5'>
            <div className='flex gap-5'>
              <Input placeholder={'First Name'} label={"First Name"} name={'firstName'} />
              <Input placeholder={'Last Name'} label={"Last Name"} name={'lastName'} />
            </div>
            <div className='flex gap-5'>
              <Input placeholder={'Phone Number'} label={"Phone Number"} name={'phoneNumber'} />
              <Input placeholder={'Email address'} label={"Email address"} name={'emailAddress'} />
            </div>
            <div className='flex flex-col'>
              <label className='font-semibold text-lg mb-3 block' htmlFor='send'>Send Us a Message</label>
              <textarea className='border border-[#E0E0E0] resize-none rounded-xl p-4' name='send' placeholder='Message...'></textarea>
            </div>
            <div className='flex justify-center '><Button className={'!px-[81.5px]'}>Submit</Button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm