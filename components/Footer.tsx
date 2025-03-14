import React from 'react';
import FacebookIcon from './svg/FacebookIcon';
import GithubIcon from './svg/GithubIcon';
import socialData from '../config/data.json';
import styles from './footer.module.scss';
import Link from 'next/link';
import InstagramIcon from './svg/InstaIcon';
import GitLabIcon from './svg/GitlabIcon';
import CodePenIcon from './svg/CodepenIcon';
import LinkedinIcon from './svg/LinkedinIcon';

const { socialLinks } = socialData[0];
const [facebookLink, githubLink, gitlabLink, codepenLink, linkedinLink] = socialLinks?.map((link: any) => link.url) || [];

const Footer = ({ style }: { style?: React.CSSProperties }) => {
	return (
		<footer className={styles.footer} style={style}>
			<div className={styles.container}>
				<p>Hit me up:</p>
				<div className={styles.social}>
					<Link target='_blank' aria-label="go to my linkedin page" href={linkedinLink}>
						<div className={styles.item}>
							<LinkedinIcon className={styles.svg} />
						</div>
					</Link>
					<Link target='_blank' aria-label="go to my facebook page" href={facebookLink}>
						<div className={styles.item}>
							<FacebookIcon className={styles.svg} />
						</div>
					</Link>
					<Link target='_blank' aria-label="go to my gitlab page" href={gitlabLink}>
						<div className={styles.item}>
							<GitLabIcon className={styles.svg} />
						</div>
					</Link>
					<Link target='_blank' aria-label="go to my codepen page" href={codepenLink}>
						<div className={styles.item}>
							<CodePenIcon className={styles.svg} />
						</div>
					</Link>
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