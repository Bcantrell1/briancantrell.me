import React from 'react';
import FacebookIcon from './svg/FacebookIcon';
import GithubIcon from './svg/GithubIcon';
import socialData from '../config/data.json';
import styles from './Footer.module.scss';
import Link from 'next/link';

const { socialLinks } = socialData[0];
const [facebookLink, githubLink] = socialLinks?.map((link: any) => link.url) || [];

const Footer = ({ style }: { style?: React.CSSProperties }) => {
	return (
		<footer className={styles.footer} style={style}>
			<div className={styles.container}>
				<p>Hit me up:</p>
				<div className={styles.social}>
					<div className={styles.facebook}>
						<Link aria-label="go to my facebook page" href={facebookLink}>
							<FacebookIcon className={styles.svg} />
						</Link>
					</div>
				</div>
				<div className={styles.github} tabIndex={0}>
					<p><Link target='_blank' href={githubLink}>@bcantrell1</Link></p>
					<Link aria-label="go to my github profile" target='_blank' href={githubLink}>
						<GithubIcon className={styles.svg} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;