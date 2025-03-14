import React from 'react';

interface PHPIconProps {
  className?: string;
  size?: number;
  color?: string;
  outlineColor?: string;
}

const PHPIcon: React.FC<PHPIconProps> = ({ 
  className = '', 
  size = 19, 
  color = 'currentColor',
  outlineColor = '#fff'
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      className={className}
    >
      <ellipse
        cx="9.5"
        cy="9.5"
        rx="10"
        ry="6"
        fill={color}
      />
      
      <path
        d="M2.5 6.5H5C6 6.5 6.7 6.7 7 7.1C7.3 7.5 7.3 8 7.1 8.5C6.9 9 6.6 9.4 6.1 9.7C5.6 10 5 10.1 4.3 10.1H3.1L2.5 12.5H1L2.5 6.5Z"
        fill={outlineColor}
      />
      <path
        d="M3 7.7L2.6 9.3H3.8C4.3 9.3 4.6 9.2 4.9 9C5.2 8.8 5.3 8.5 5.4 8.2C5.5 7.9 5.4 7.8 5.2 7.7C5 7.6 4.7 7.6 4.3 7.6H3Z"
        fill={color}
      />
      
      <path
        d="M7 6.5H8.5L8 8.5H10C10.8 8.5 11.3 8.7 11.5 9C11.7 9.3 11.7 9.8 11.5 10.5L10.7 12.5H9.2L10 10.5C10.05 10.3 10.05 10.2 10 10.1C9.95 10 9.8 10 9.5 10H8L7.2 12.5H5.7L7 6.5Z"
        fill={outlineColor}
      />
      
      <path
        d="M12.5 6.5H15C16 6.5 16.7 6.7 17 7.1C17.3 7.5 17.3 8 17.1 8.5C16.9 9 16.6 9.4 16.1 9.7C15.6 10 15 10.1 14.3 10.1H13.1L12.5 12.5H11L12.5 6.5Z"
        fill={outlineColor}
      />
      <path
        d="M13 7.7L12.6 9.3H13.8C14.3 9.3 14.6 9.2 14.9 9C15.2 8.8 15.3 8.5 15.4 8.2C15.5 7.9 15.4 7.8 15.2 7.7C15 7.6 14.7 7.6 14.3 7.6H13Z"
        fill={color}
      />
    </svg>
  );
};

export default PHPIcon;