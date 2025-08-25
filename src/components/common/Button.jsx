import React from 'react';

const Button = ({ className = '', children }) => {
  return (
    <button
      className={`
    relative overflow-hidden
    rounded-[12px] py-[16px] px-[32px] cursor-pointer text-white
    transition-all duration-300 ${className}
    before:content-[''] before:absolute before:inset-0 before:bg-black/5
    before:opacity-0 hover:before:opacity-100
  `}
    >
      {children}
    </button>
  );
};

export default Button;