'use client';
import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './navbar.module.scss';

const Navbar = ({ name }: { name: string }) => {
    const [showPhoneMenu, setShowPhoneMenu] = useState(false);
    const [showBurgerNav, setShowBurgerNav] = useState(false);
    const phoneMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
            setShowBurgerNav(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const togglePhoneMenu = () => {
        if (showPhoneMenu) {
            if (phoneMenuRef.current) {
                phoneMenuRef.current.classList.remove(styles.open);
                setTimeout(() => {
                    setShowPhoneMenu(false);
                }, 300);
            }
        } else {
            setShowPhoneMenu(true);
            setTimeout(() => {
                if (phoneMenuRef.current) {
                    phoneMenuRef.current.classList.add(styles.open);
                }
            }, 10);
        }
    };

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname?.startsWith(href) || '';
    };

    return (
        <header className={styles.header}>
            {/* Main Container */}
            <div className={styles.container}>
                <div className={styles.name}>{name}</div>
                <nav className={styles.nav}>
                    <Link
                        href={'/'}
                        className={`${styles.subNavs} ${isActive('/') ? styles.active : ''}`}
                    >
                        _home
                    </Link>
                    <Link
                        href={'/about'}
                        className={`${styles.subNavs} ${isActive('/about') ? styles.active : ''}`}
                    >
                        _about-me
                    </Link>
                    <Link
                        href={'/projects'}
                        className={`${styles.subNavs} ${isActive('/projects') ? styles.active : ''}`}
                    >
                        _projects
                    </Link>
                </nav>
                {/* <LangToggle /> */}
                <Link
                    href={'/contact'}
                    className={`${styles.contact} ${styles.subNavs} ${isActive('/contact') ? styles.active : ''}`}
                >
                    _contact-me
                </Link>
            </div>

            {showBurgerNav && (
                <div className={styles.burgerNav} onClick={togglePhoneMenu}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} />
                    ))}
                </div>
            )}

            {showPhoneMenu && (
                <div className={styles.phoneMenu} ref={phoneMenuRef}>
                    <div
                        className={styles.removePhoneMenu}
                        onClick={togglePhoneMenu}
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <span key={i} />
                        ))}
                    </div>
                    <div className={styles.phoneBody}>
                        <div className={styles.name}>{name}</div>
                        <ul>
                            <Link
                                href={'/'}
                                className={`${styles.phoneSubNavs} ${isActive('/') ? styles.active : ''}`}
                                onClick={togglePhoneMenu}
                            >
                                _home
                            </Link>
                            <Link
                                href={'/about'}
                                className={`${styles.phoneSubNavs} ${isActive('/about') ? styles.active : ''}`}
                                onClick={togglePhoneMenu}
                            >
                                _about-me
                            </Link>
                            <Link
                                href={'/projects'}
                                className={`${styles.phoneSubNavs} ${isActive('/projects') ? styles.active : ''}`}
                                onClick={togglePhoneMenu}
                            >
                                _projects
                            </Link>
                            <Link
                                href={'/contact'}
                                className={`${styles.contact} ${styles.phoneSubNavs} ${isActive('/contact') ? styles.active : ''}`}
                                onClick={togglePhoneMenu}
                            >
                                _contact-me
                            </Link>
                        </ul>
                    </div>
                    <Footer style={{ display: 'block', bottom: 0 }} />
                </div>
            )}
        </header>
    );
};

export default Navbar;
