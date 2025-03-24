import React from 'react';

interface TSIconProps {
    className?: string;
    size?: number;
    color?: string;
    textColor?: string;
}

const TSIcon: React.FC<TSIconProps> = ({
    className = '',
    size = 25,
    color = 'currentColor',
    textColor = 'white',
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect width="25" height="25" rx="4" fill={color} />
            <path
                d="M14.81 16.325V22H13.17V16.325H11.225V15.07H16.835L16.665 16.325H14.81ZM22.6761 19.975C22.6761 20.405 22.5628 20.785 22.3361 21.115C22.1128 21.445 21.7911 21.7033 21.3711 21.89C20.9511 22.0767 20.4461 22.17 19.8561 22.17C19.2028 22.17 18.6544 22.075 18.2111 21.885C17.7711 21.6917 17.4061 21.4533 17.1161 21.17L17.9461 20.25C18.2028 20.4733 18.4861 20.6467 18.7961 20.77C19.1061 20.89 19.4461 20.95 19.8161 20.95C20.0461 20.95 20.2478 20.9167 20.4211 20.85C20.5944 20.7833 20.7294 20.6867 20.8261 20.56C20.9228 20.4333 20.9711 20.28 20.9711 20.1C20.9711 19.93 20.9328 19.7867 20.8561 19.67C20.7794 19.5533 20.6494 19.4483 20.4661 19.355C20.2861 19.2617 20.0344 19.1667 19.7111 19.07C19.1711 18.9033 18.7361 18.72 18.4061 18.52C18.0794 18.32 17.8411 18.0883 17.6911 17.825C17.5444 17.5617 17.4711 17.255 17.4711 16.905C17.4711 16.4817 17.5878 16.12 17.8211 15.82C18.0578 15.52 18.3744 15.2917 18.7711 15.135C19.1678 14.975 19.6044 14.895 20.0811 14.895C20.6178 14.895 21.0911 14.9733 21.5011 15.13C21.9111 15.2833 22.2661 15.5033 22.5661 15.79L21.7911 16.68C21.5578 16.4833 21.3061 16.3383 21.0361 16.245C20.7661 16.1483 20.4911 16.1 20.2111 16.1C20.0044 16.1 19.8228 16.1267 19.6661 16.18C19.5094 16.23 19.3878 16.305 19.3011 16.405C19.2144 16.505 19.1711 16.63 19.1711 16.78C19.1711 16.9267 19.2128 17.05 19.2961 17.15C19.3794 17.25 19.5244 17.345 19.7311 17.435C19.9378 17.5217 20.2244 17.6233 20.5911 17.74C21.0278 17.8733 21.4011 18.0333 21.7111 18.22C22.0244 18.4033 22.2628 18.635 22.4261 18.915C22.5928 19.195 22.6761 19.5483 22.6761 19.975Z"
                fill={textColor}
            />
        </svg>
    );
};

export default TSIcon;
