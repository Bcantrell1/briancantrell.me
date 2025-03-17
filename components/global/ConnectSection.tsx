'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './connectSection.module.scss';
import { CheckCircle } from 'lucide-react';

interface SocialLink {
  url: string;
  'social-title': string;
}

interface ConnectSectionProps {
  email: string;
  socialLinks?: SocialLink[];
  isHidden: boolean;
  display: string;
  isMobile: boolean;
}

export default function ConnectSection({ 
  email, 
  socialLinks, 
  isHidden, 
  display,
  isMobile 
}: ConnectSectionProps) {
  const [showIcon, setShowIcon] = useState([false, false]);
  
  const displayEmail = isMobile
    ? email
    : email.slice(0, -15) + ' ...';

  return (
    <div
      style={{ display }}
      className={`${styles.personalContact} ${isHidden ? styles.hidden : ''}`}
    >
      <p>
        {displayEmail}
        {showIcon[0] && <CheckCircle size={16} />}
      </p>
      
      {socialLinks?.map((social, index) => (
        <p key={index}>
          <Link
            href={social.url}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social['social-title'].charAt(0).toUpperCase() + social['social-title'].slice(1)}
          </Link>
        </p>
      ))}
    </div>
  );
}