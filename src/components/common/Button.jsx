import React from 'react';

const Button = ({ className = '', children }) => {
  return (
    <button
      className={`rounded-[12px] py-[16px] px-[32px] cursor-pointer text-white hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;