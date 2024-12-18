import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  className = '',
  disabled = false
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-h-[32px] px-3 py-1.5 flex items-center gap-2 rounded-md
        ${
          disabled
            ? 'bg-[#00000040] cursor-not-allowed'
            : 'bg-gradient-to-b from-[#47ACD7] to-[#3671C9]'
        } text-white
        hover:brightness-95
        focus:shadow-[0px_0px_0px_3px_#7FBDD966] focus:outline-none
        active:bg-[linear-gradient(180deg,_#47ACD7_0%,_#3671C9_100%),_linear-gradient(0deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3))]
        transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};
