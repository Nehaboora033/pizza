import React, { useState } from 'react'
import Input from './common/Input'
import Button from './common/Button'

const ContactForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    send: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formValues);
      // Submit logic here
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.firstName) errors.firstName = 'Missing First Name!';
    if (!values.lastName) errors.lastName = 'Missing Last Name!';
    if (!values.phoneNumber) errors.phoneNumber = 'Missing Phone Number!';
    if (!values.emailAddress) errors.emailAddress = 'Missing Email!';
    else if (!emailRegex.test(values.emailAddress)) errors.emailAddress = 'Invalid Email format!';
    if (!values.send) errors.send = 'Message cannot be empty!';

    return errors;
  };

  return (
    <div className='max-w-[948px] px-3 mx-auto pt-[100px]'>
      <div className='shadow-choose rounded-[20px] p-[40px]'>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div className='flex gap-5'>
            <Input
              placeholder='First Name'
              label='First Name'
              name='firstName'
              value={formValues.firstName}
              onChange={handleChange}
              error={formErrors.firstName}
            />
            <Input
              placeholder='Last Name'
              label='Last Name'
              name='lastName'
              value={formValues.lastName}
              onChange={handleChange}
              error={formErrors.lastName}
            />
          </div>

          <div className='flex gap-5'>
            <Input
              placeholder='Phone Number'
              type='tel'
              label='Phone Number'
              name='phoneNumber'
              value={formValues.phoneNumber}
              onChange={handleChange}
              error={formErrors.phoneNumber}
            />
            <Input
              placeholder='Email Address'
              type='email'
              label='Email Address'
              name='emailAddress'
              value={formValues.emailAddress}
              onChange={handleChange}
              error={formErrors.emailAddress}
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold text-lg mb-3' htmlFor='send'>Send Us a Message</label>
            <textarea
              className={`border rounded-xl resize-none h-[135px] p-4 ${formErrors.send ? 'border-red-500' : 'border-[#E0E0E0]'}`}
              name='send'
              placeholder='Message...'
              value={formValues.send}
              onChange={handleChange}
            />
            {formErrors.send && <p className='text-red-500 text-sm mt-1'>{formErrors.send}</p>}
          </div>

          <div className='flex justify-center'>
            <Button className='!px-[81.5px] bg-prime'>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm