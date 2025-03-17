'use client';

import FoldableTab from '@/components/global/FoldableTab';
import styles from './aboutSide.module.scss';
import IconNavigation from '@/components/navigation/about/Tab';
import NavItems from '@/components/navigation/about/NavItems';
import ConnectSection from '@/components/global/ConnectSection';

interface AboutSideProps {
  navigation: {
    activeIconIndex: number;
    isHobbiesHidden: boolean;
    isContactHidden: boolean;
    isMobile: boolean;
    hobbiesDisplay: string;
    contactDisplay: string;
    navItems: any[];
    toggleHobbies: () => void;
    toggleContact: () => void;
    setActiveIcon: (index: number) => void;
    isNavItemActive: (path: string) => boolean;
    setActiveNavItem: (path: string) => void;
  };
  userData: {
    email: string;
    socialLinks?: Array<{
      url: string;
      'social-title': string;
    }>;
  };
}

export default function AboutSide({ navigation, userData }: AboutSideProps) {

  return (
    <aside>
      <IconNavigation 
        activeIconIndex={navigation.activeIconIndex} 
        setActiveIcon={navigation.setActiveIcon} 
      />

      <div className={styles.lists}>
        <FoldableTab hasLine={navigation.isMobile ? false : true} onToggle={navigation.toggleHobbies}>
          <p>about_nav</p>
        </FoldableTab>

        <NavItems 
          items={navigation.navItems}
          isHidden={navigation.isHobbiesHidden}
          display={navigation.hobbiesDisplay}
          onItemClick={navigation.setActiveNavItem}
          isNavItemActive={navigation.isNavItemActive}
        />

        <FoldableTab initiallyFolded={true} onToggle={navigation.toggleContact}>
          <p>contacts</p>
        </FoldableTab>

        <ConnectSection 
          email={userData.email}
          socialLinks={userData.socialLinks}
          isHidden={navigation.isContactHidden}
          display={navigation.contactDisplay}
          isMobile={navigation.isMobile}
        />
      </div>
    </aside>
  );
}