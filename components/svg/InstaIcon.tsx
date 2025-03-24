import React from 'react';

interface InstagramIconProps {
    className?: string;
    size?: number;
    color?: string;
    cameraColor?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({
    className = '',
    size = 24,
    color = 'currentColor',
    cameraColor = 'currentColor',
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
            {/* Rounded square outline */}
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke={color}
                strokeWidth="2"
                fill="none"
            />

            {/* Center circle (camera lens) */}
            <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke={color}
                strokeWidth="2"
                fill="none"
            />

            {/* Camera flash dot */}
            <circle cx="17.5" cy="6.5" r="1.5" fill={cameraColor} />
        </svg>
    );
};

export default InstagramIcon;
