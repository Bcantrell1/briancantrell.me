'use client';

import styles from './tab.module.scss';
import { Terminal, Circle, Gamepad } from 'lucide-react';

export interface AboutTabInfo {
  icon: React.ReactNode;
  iconAlt: string;
  path: string;
}

interface AboutTabProps {
  activeIconIndex: number;
  setActiveIcon: (index: number) => void;
}

export const aboutTabInfo: AboutTabInfo[] = [
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

export default function AboutTab({ activeIconIndex, setActiveIcon }: AboutTabProps) {
  return (
    <div className={styles.tab}>
      {aboutTabInfo.map((icon, index) => (
        <div
          key={icon.iconAlt}
          className={`${styles.tabIcon} ${activeIconIndex === index ? styles.active : ''}`}
          onClick={() => setActiveIcon(index)}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
}