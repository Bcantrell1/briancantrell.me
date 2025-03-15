'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import FoldableTab from '@/components/global/FoldableTab';
import styles from './layout.module.scss';
import userData from '@/config/data.json';

import { 
	Terminal, 
	Circle, 
	Gamepad, 
	Folder, 
	CheckCircle,
} from 'lucide-react';

interface IconInfo {
	icon: React.ReactNode;
	iconAlt: string;
	path: string;
}

interface HobbyInfo {
	title: string;
	icon: React.ReactNode;
	iconAlt: string;
	color?: string;
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	const t = useTranslations('AboutPage');
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const [activeIconIndex, setActiveIconIndex] = useState(1);
	const [isHobbiesHidden, setIsHobbiesHidden] = useState(false);
	const [isContactHidden, setIsContactHidden] = useState(true);
	const [activeHobbyIndex, setActiveHobbyIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [showIcon, setShowIcon] = useState([false, false]);
	const [hobbiesDisplay, setHobbiesDisplay] = useState('block');
	const [contactDisplay, setContactDisplay] = useState('none');

	const icons: IconInfo[] = [
		{ 
			icon: <Terminal size={24} />, 
			iconAlt: 'terminal', 
			path: 'professional' 
		},
		{ 
			icon: <Circle size={24} />, 
			iconAlt: 'circle', 
			path: 'personal' 
		},
		{ 
			icon: <Gamepad size={24} />, 
			iconAlt: 'gamepad', 
			path: 'hobbies' 
		}
	];

	// Dynamic navigation items based on current route
	const getNavItemsByRoute = useCallback(() => {
		const currentRoute = pathname.split('/').pop() || '';
		
		if (currentRoute.includes('professional')) {
			return [
				{ 
					title: 'resume', 
					icon: <Folder size={20} color="#e74c3c" />, 
					iconAlt: 'red folder',
					path: 'resume'
				},
				{ 
					title: 'career', 
					icon: <Folder size={20} color="#2ecc71" />, 
					iconAlt: 'green folder',
					path: 'career'
				},
				{ 
					title: 'contributions', 
					icon: <Folder size={20} color="#9b59b6" />, 
					iconAlt: 'purple folder',
					path: 'contributions'
				},
			];
		} else if (currentRoute.includes('hobbies')) {
			return [
				{ 
					title: 'sports', 
					icon: <Folder size={20} color="#e74c3c" />, 
					iconAlt: 'red folder',
					path: 'sports' 
				},
				{ 
					title: 'travel', 
					icon: <Folder size={20} color="#2ecc71" />, 
					iconAlt: 'green folder',
					path: 'travel'
				},
				{ 
					title: 'lifestyle', 
					icon: <Folder size={20} color="#9b59b6" />, 
					iconAlt: 'purple folder',
					path: 'lifestyle'
				},
			];
		} else {
			return [
				{ 
					title: 'bio', 
					icon: <Folder size={20} color="#e74c3c" />, 
					iconAlt: 'red folder',
					path: 'bio'
				},
				{ 
					title: 'interests', 
					icon: <Folder size={20} color="#2ecc71" />, 
					iconAlt: 'green folder',
					path: 'interests'
				},
				{ 
					title: 'milestones', 
					icon: <Folder size={20} color="#9b59b6" />, 
					iconAlt: 'purple folder',
					path: 'milestones'
				},
			];
		}
	}, [pathname]);

	const navItems = getNavItemsByRoute();

	const user = userData[0];
	const contInfo = [user.email, user.phone];

	const displayContactInfo = isMobile
		? contInfo
		: [contInfo[0]?.slice(0, -10) + ' ...', contInfo[1]];

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

	const setActiveIcon = useCallback((index: number) => {
		setActiveIconIndex(index);
		router.push(`/${locale}/about/${icons[index].path}`);
	}, [icons, locale, router]);

	// Add a function to check if a nav item is active
	const isNavItemActive = useCallback((itemPath: string) => {
		const currentPath = pathname.split('/').pop() || '';
		return currentPath.includes(itemPath);
	}, [pathname]);

	const setActiveHobby = (itemPath: string) => {
		// Get current main route
		const mainRoute = pathname.split('/').slice(0, -1).join('/');
		const currentRoute = pathname.split('/').pop() || '';
		
		// Check if we're already on a subpage
		const isOnSubPage = navItems.some(item => currentRoute.includes(item.path));
		
		// Construct the new route
		const baseRoute = isOnSubPage 
			? mainRoute 
			: pathname;
			
		// Navigate to the selected sub-route
		router.push(`${baseRoute}/${itemPath}`);
	};

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
			router.replace(`/${locale}/about/personal`);
		}

		const currentPath = pathname.split('/').pop();
		const index = icons.findIndex(icon => currentPath?.includes(icon.path));
		if (index !== -1) {
			setActiveIconIndex(index);
		}
	}, [pathname, locale, router, icons]);

	return (
		<div className={styles.aboutMe}>
			<aside>
				<div className={styles.tab}>
					{icons.map((icon, index) => (
						<div
							key={icon.iconAlt}
							className={`${styles.tabIcon} ${activeIconIndex === index ? styles.active : ''}`}
							onClick={() => setActiveIcon(index)}
						>
							{icon.icon}
						</div>
					))}
				</div>

				<div className={styles.lists}>
					<FoldableTab hasLine={isMobile ? false : true} onToggle={toggleHobbies}>
						<p>personal_info</p>
					</FoldableTab>

					<div
						style={{ display: hobbiesDisplay }}
						className={`${styles.hobbiesBar} ${isHobbiesHidden ? styles.hidden : ''}`}
					>
						{navItems.map((item, index) => (
							<div
								key={index}
								className={isNavItemActive(item.path) ? styles.active : ''}
								onClick={() => setActiveHobby(item.path)}
							>
								<span>{item.icon}</span>
								<p>{item.title}</p>
							</div>
						))}
					</div>

					<FoldableTab initiallyFolded={true} onToggle={toggleContact}>
						<p>contacts</p>
					</FoldableTab>

					<div
						style={{ display: contactDisplay }}
						className={`${styles.personalContact} ${isContactHidden ? styles.hidden : ''}`}
					>
						<p>
							{displayContactInfo[0]}
							{showIcon[0] && <CheckCircle size={16} />}
						</p>
						<p>
							{contInfo[1]}
							{showIcon[1] && <CheckCircle size={16} />}
						</p>
					</div>
				</div>
			</aside>
			<main>
				{children}
			</main>
		</div>
	);
}