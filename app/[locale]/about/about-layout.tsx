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
	FileText,
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

	const hobbiesObj: HobbyInfo[] = [
		{ 
			title: 'bio', 
			icon: <Folder size={20} color="#e74c3c" />, 
			iconAlt: 'red folder' 
		},
		{ 
			title: 'interests', 
			icon: <Folder size={20} color="#2ecc71" />, 
			iconAlt: 'green folder' 
		},
		{ 
			title: 'education', 
			icon: <Folder size={20} color="#9b59b6" />, 
			iconAlt: 'purple folder' 
		},
		{ 
			title: 'other', 
			icon: <FileText size={20} />, 
			iconAlt: 'markdown icon' 
		},
		{ 
			title: 'other', 
			icon: <FileText size={20} />, 
			iconAlt: 'markdown icon' 
		}
	];

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

	const setActiveHobby = (index: number) => {
		setActiveHobbyIndex(index);
	};

	const checkScreenSize = useCallback(() => {
		setIsMobile(window.innerWidth < 946);
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
						{hobbiesObj.map((hobby, index) => (
							<div
								key={index}
								className={activeHobbyIndex === index ? styles.active : ''}
								onClick={() => setActiveHobby(index)}
							>
								<span>{hobby.icon}</span>
								<p>{hobby.title}</p>
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