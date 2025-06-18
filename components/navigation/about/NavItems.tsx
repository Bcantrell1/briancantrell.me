'use client';

import styles from './navItems.module.scss';

export interface NavItem {
    title: string;
    icon: React.ReactNode;
    iconAlt: string;
    path: string;
    target?: string;
    href?: string;
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
    const handleItemClick = (item: NavItem) => {
        // If it's an external link (has href), open it directly
        if (item.href) {
            window.open(item.href, item.target || '_self');
        } else {
            // Otherwise, use the internal navigation
            onItemClick(item.path);
        }
    };

    return (
        <div
            style={{ display }}
            className={`${styles.hobbiesBar} ${isHidden ? styles.hidden : ''}`}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.hobbyItem} ${isNavItemActive(item.path) ? styles.active : ''}`}
                    onClick={() => handleItemClick(item)}
                >
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}
