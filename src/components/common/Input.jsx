import React from 'react'

const Input = ({ name ,type="text", placeholder,value,onchange,className }) => {
    return (
        <input type={type}
         name={name}
         placeholder={placeholder}
         value={value}
         onChange={onchange}
         className={`rounded-[12px] py-[13px] px-4 border border-[#E0E0E0] ${className}`} />
    )
}

export default Input