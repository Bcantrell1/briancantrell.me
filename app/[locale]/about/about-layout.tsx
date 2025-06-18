'use client';

import userData from '@/config/data.json';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './layout.module.scss';

import AboutSide from '@/components/sidebar/about/AboutSide';
import { Circle, Folder, Gamepad, Terminal } from 'lucide-react';

interface IconInfo {
    icon: React.ReactNode;
    iconAlt: string;
    path: string;
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const [activeIconIndex, setActiveIconIndex] = useState(1);
    const [isHobbiesHidden, setIsHobbiesHidden] = useState(false);
    const [isContactHidden, setIsContactHidden] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [hobbiesDisplay, setHobbiesDisplay] = useState('block');
    const [contactDisplay, setContactDisplay] = useState('none');

    const icons: IconInfo[] = useMemo(
        () => [
            {
                icon: <Terminal size={24} />,
                iconAlt: 'terminal',
                path: 'professional',
            },
            {
                icon: <Circle size={24} />,
                iconAlt: 'circle',
                path: 'personal',
            },
            {
                icon: <Gamepad size={24} />,
                iconAlt: 'gamepad',
                path: 'hobbies',
            },
        ],
        [],
    );

    const getNavItemsByRoute = useCallback(() => {
        const currentRoute = pathname.split('/').pop() || '';

        if (currentRoute.includes('professional')) {
            return [
                {
                    title: 'resume',
                    icon: <Folder size={20} color="#e74c3c" />,
                    iconAlt: 'red folder',
                    path: '/resume.pdf',
                    target: '_blank',
                    href: '/resume.pdf',
                },
            ];
        } else if (currentRoute.includes('hobbies')) {
            return [
                {
                    title: 'sports',
                    icon: <Folder size={20} color="#e74c3c" />,
                    iconAlt: 'red folder',
                    path: 'sports',
                },
                {
                    title: 'travel',
                    icon: <Folder size={20} color="#2ecc71" />,
                    iconAlt: 'green folder',
                    path: 'travel',
                },
                {
                    title: 'lifestyle',
                    icon: <Folder size={20} color="#9b59b6" />,
                    iconAlt: 'purple folder',
                    path: 'lifestyle',
                },
            ];
        } else {
            return [
                {
                    title: 'bio',
                    icon: <Folder size={20} color="#e74c3c" />,
                    iconAlt: 'red folder',
                    path: 'bio',
                },
                {
                    title: 'interests',
                    icon: <Folder size={20} color="#2ecc71" />,
                    iconAlt: 'green folder',
                    path: 'interests',
                },
                {
                    title: 'milestones',
                    icon: <Folder size={20} color="#9b59b6" />,
                    iconAlt: 'purple folder',
                    path: 'milestones',
                },
            ];
        }
    }, [pathname]);

    const navItems = getNavItemsByRoute();

    const user = userData[0];

    const toggleHobbies = () => {
        if (isHobbiesHidden) {
            setIsHobbiesHidden(false);
            setHobbiesDisplay('block');
        } else {
            setIsHobbiesHidden(true);
            setTimeout(() => setHobbiesDisplay('none'), 300);
        }
    };

    const toggleContact = () => {
        if (isContactHidden) {
            setIsContactHidden(false);
            setContactDisplay('block');
        } else {
            setIsContactHidden(true);
            setTimeout(() => setContactDisplay('none'), 300);
        }
    };

    const setActiveIcon = useCallback(
        (index: number) => {
            setActiveIconIndex(index);
            router.push(`/${locale}/about/${icons[index].path}`);
        },
        [icons, locale, router],
    );

    const isNavItemActive = useCallback(
        (itemPath: string) => {
            const currentPath = pathname.split('/').pop() || '';
            return currentPath.includes(itemPath);
        },
        [pathname],
    );

    const checkScreenSize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [checkScreenSize]);

    useEffect(() => {
        if (pathname === `/${locale}/about`) {
            router.replace(`/${locale}/about/personal/bio`);
        }

        const currentPath = pathname.split('/').pop();
        const index = icons.findIndex(icon => currentPath?.includes(icon.path));
        if (index !== -1) {
            setActiveIconIndex(index);
        }
    }, [pathname, locale, router, icons]);

    return (
        <div className={styles.aboutMe}>
            <AboutSide
                navigation={{
                    activeIconIndex,
                    isHobbiesHidden,
                    isContactHidden,
                    isMobile,
                    hobbiesDisplay,
                    contactDisplay,
                    navItems,
                    toggleHobbies,
                    toggleContact,
                    setActiveIcon,
                    isNavItemActive,
                    setActiveNavItem: (path: string) => {
                        router.push(`/${locale}/about/personal/${path}`);
                    },
                }}
                userData={{
                    email: user.email || '',
                    socialLinks: user.socialLinks || [],
                }}
            />
            <main style={{ width: '100%', overflowY: 'scroll' }}>{children}</main>
        </div>
    );
}
