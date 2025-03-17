import React from 'react';

interface HTMLIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const HTMLIcon: React.FC<HTMLIconProps> = ({ 
  className = '', 
  size = 16, 
  color = 'currentColor' 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={Math.round(size * 1.125)}
      fill={color}
      viewBox="0 0 16 18"
      className={className}
    >
      <path
        d="M8.00001 14.517L11.9351 13.4473L12.4657 7.67417H5.46694L5.29318 5.75434H12.6403L12.8336 3.87115H3.16639L3.70809 9.55907H10.3687L10.1464 12.0002L8.00001 12.5683L5.85363 12.0002L5.71905 10.4295H3.7856L4.06582 13.4481L8.00001 14.517ZM0.334351 0.737595H15.6657L14.2833 16.0689L8.00001 17.7724L1.71672 16.0689L0.334351 0.737595Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HTMLIcon;