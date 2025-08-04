import React from 'react'

const Input = ({ name, type = "text", placeholder, value, onchange, className, label ,error}) => {
    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={name}
                    className="block mb-3 text-lg font-semibold ">
                    {label}
                </label>
            )}
            <input type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                className={`rounded-[12px] w-full py-[13px] px-4 border border-[#E0E0E0] ${className}`} />
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input