'use client';
import LangToggle from "./LangToggle";
import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from "@/i18n/navigation";
import styles from './navbar.module.scss';

const Navbar = ({ name }: { name: string }) => {
	const [showPhoneMenu, setShowPhoneMenu] = useState(false);

	const togglePhoneMenu = () => {
		setShowPhoneMenu(!showPhoneMenu);
	};

	return (
		<header className={styles.header}>
			{/* Main Container */}
			<div className={styles.container}>
				<div className={styles.name}>{name}</div>
				<nav className={styles.nav}>
					<Link href={'/'} className={styles.subNavs}>
						_home
					</Link>
					<Link href={'/about'} className={styles.subNavs}>
						_about-me
					</Link>
					<Link href={'/projects'} className={styles.subNavs}>
						_projects
					</Link>
				</nav>
				{/* <LangToggle /> */}
				<Link href={'/contact'} className={[styles.contact, styles.subNavs].join(' ')}>
					_contact-me
				</Link>
			</div>

			{/* Burger Navigation */}
			<div className={styles.burgerNav} onClick={togglePhoneMenu}>
				{Array.from({ length: 3 }).map((_, i) => (
					<span key={i} />
				))}
			</div>

			{/* Phone Menu */}
			{showPhoneMenu && (
				<div className={styles.phoneMenu}>
					<div className={styles.removePhoneMenu} onClick={togglePhoneMenu}>
						{Array.from({ length: 2 }).map((_, i) => (
							<span key={i} />
						))}
					</div>
					<div className={styles.phoneBody}>
						<div className={styles.name}>{name}</div>
						<ul>
							<Link
								href={'/'}
								className={[styles.phone, styles.subNavs].join(' ')}
								onClick={togglePhoneMenu}
							>
								_home
							</Link>
							<Link
								href={'/about'}
								className={[styles.phone, styles.subNavs].join(' ')}
								onClick={togglePhoneMenu}
							>
								_about-me
							</Link>
							<Link
								href={'/projects'}
								className={[styles.phone, styles.subNavs].join(' ')}
								onClick={togglePhoneMenu}
							>
								_projects
							</Link>
							<Link
								href={'/contact'}
								className={[styles.contact, styles.phoneSubNavs].join(' ')}
								onClick={togglePhoneMenu}
							>
								_contact-me
							</Link>
						</ul>
					</div>
					<Footer />
				</div>
			)}
		</header>
	);
};

export default Navbar;