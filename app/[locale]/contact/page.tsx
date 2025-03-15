'use client';

import { useState } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import FoldableTab from '@/components/global/FoldableTab';
import styles from './contact.module.scss';
import { Mail, Copy, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function ContactPage() {
  const [isContactHidden, setIsContactHidden] = useState(false);
  const [contactDisplay, setContactDisplay] = useState('block');
  const [isSocialsHidden, setIsSocialsHidden] = useState(false);
  const [socialsDisplay, setSocialsDisplay] = useState('block');
  const [showIcon, setShowIcon] = useState([false, false]);

  const contInfo = ['cantrellbrian546@gmail.com'];

  const toggleContact = () => {
    if (isContactHidden) {
      setIsContactHidden(false);
      setContactDisplay('block');
    } else {
      setIsContactHidden(true);
      setTimeout(() => setContactDisplay('none'), 300);
    }
  };

  const toggleSocials = () => {
    if (isSocialsHidden) {
      setIsSocialsHidden(false);
      setSocialsDisplay('block');
    } else {
      setIsSocialsHidden(true);
      setTimeout(() => setSocialsDisplay('none'), 300);
    }
  };

  const openMailTo = (index: number) => {
    const email = contInfo[index];
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      console.error('Email not found at the specified index');
    }
  };

  return (
    <div className={styles.aboutMe}>
      <aside>
        <FoldableTab onToggle={toggleContact}>
          <p>contacts</p>
        </FoldableTab>
        <div
          style={{ display: contactDisplay }}
          className={`${styles.personalContact} ${isContactHidden ? styles.hidden : ''}`}
        >
          <p onClick={() => { openMailTo(0); }}>
            {contInfo[0]}
            {showIcon[0] && <Mail color="currentColor" />}
          </p>
        </div>

        <FoldableTab onToggle={toggleSocials}>
          <p>find-me-here</p>
        </FoldableTab>
        <div
          style={{ display: socialsDisplay }}
          className={`${styles.personalSocials} ${isSocialsHidden ? styles.hidden : ''}`}
        >
          <ul>
            <li>
              <ExternalLink color="currentColor" size={20} />
              <Link
                aria-label="check out my css battle page"
                href="https://cssbattle.dev/player/ziggy"
                className={styles.externalLink}
              >
                Css Battle
              </Link>
            </li>
            <li>
              <ExternalLink color="currentColor" size={20} />
              <Link
                aria-label="check out my code wars profile"
                href="https://www.codewars.com/users/bribri546"
                className={styles.externalLink}
              >
                CodeWars
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <ContactForm />
    </div>
  );
}