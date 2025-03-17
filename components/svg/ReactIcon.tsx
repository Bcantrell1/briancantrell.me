import React from 'react';

interface ReactIconProps {
  className?: string;
  size?: number;
  color?: string;
  orbitColor?: string;
}

const ReactIcon: React.FC<ReactIconProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  orbitColor = 'currentColor'
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <ellipse 
        cx="12" 
        cy="12" 
        rx="10" 
        ry="4.5" 
        stroke={orbitColor} 
        strokeWidth="1.5" 
        transform="rotate(0 12 12)" 
      />
      <ellipse 
        cx="12" 
        cy="12" 
        rx="10" 
        ry="4.5" 
        stroke={orbitColor} 
        strokeWidth="1.5" 
        transform="rotate(60 12 12)" 
      />
      <ellipse 
        cx="12" 
        cy="12" 
        rx="10" 
        ry="4.5" 
        stroke={orbitColor} 
        strokeWidth="1.5" 
        transform="rotate(120 12 12)" 
      />
      
      <circle 
        cx="12" 
        cy="12" 
        r="2.5" 
        fill={color} 
      />
    </svg>
  );
};

export default ReactIcon;