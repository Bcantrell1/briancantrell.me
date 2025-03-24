'use client';

import styles from './navItems.module.scss';

export interface NavItem {
    title: string;
    icon: React.ReactNode;
    iconAlt: string;
    path: string;
}

interface NavItemsProps {
    items: NavItem[];
    isHidden: boolean;
    display: string;
    onItemClick: (path: string) => void;
    isNavItemActive: (path: string) => boolean;
}

export default function NavItems({
    items,
    isHidden,
    display,
    onItemClick,
    isNavItemActive,
}: NavItemsProps) {
    return (
        <div
            style={{ display }}
            className={`${styles.hobbiesBar} ${isHidden ? styles.hidden : ''}`}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.hobbyItem} ${isNavItemActive(item.path) ? styles.active : ''}`}
                    onClick={() => onItemClick(item.path)}
                >
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}
