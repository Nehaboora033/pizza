import React, { Children } from 'react'

const Input = ({ name, type = "text", placeholder, value, onChange, className, label, error,children }) => {
    return (
        <div className='w-full relative'>
            {label && (
                <label htmlFor={name} className="block mb-3 text-lg font-semibold">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`rounded-[12px]  w-full py-[13px] px-4 border ${error ? 'border-red-500' : 'border-[#E0E0E0]'} ${className}`}
            />
            {children && (
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        {children}
                    </div>
                )}

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Input;