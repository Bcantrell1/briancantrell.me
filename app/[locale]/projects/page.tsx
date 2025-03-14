'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './Projects.module.scss';
import ProjectsFilter from '@/components/navigation/projects/ProjectsFilter';
import SelectTab from '@/components/global/SelectTab';
import ProjectsNav from '@/components/navigation/projects/ProjectsNav';
import ProjectsSide from '@/components/sidebar/projects/ProjectsSide';

type ProjectItem = {
    title: string;
    imgAlt: string;
    isActive: boolean;
};

const Projects = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState('block');
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // State for the list of items
  const [list, setList] = useState([
    { title: 'html', imgAlt: 'html icon', isActive: true },
    { title: 'css', imgAlt: 'css icon', isActive: true },
    { title: 'react', imgAlt: 'React icon', isActive: true },
    { title: 'ts', imgAlt: 'Typescript icon', isActive: true },
    { title: 'php', imgAlt: 'php icon', isActive: true },
  ]);

  const activeItems = useMemo(
    () => list.filter((item) => item.isActive).map((item) => item.title),
    [list]
  );

  const toggleActive = (item: ProjectItem) => {
    setList((prevList) =>
      prevList.map((prevItem) =>
        prevItem === item ? { ...prevItem, isActive: !prevItem.isActive } : prevItem
      )
    );
  };

  const removeItem = (itemTitle: string) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.title === itemTitle ? { ...item, isActive: false } : item
      )
    );
  };

  const saveActiveItems = () => {
    const activeTitles = list.filter((item) => item.isActive).map((item) => item.title);
    localStorage.setItem('activeItems', JSON.stringify(activeTitles));
  };

  const loadActiveItems = () => {
    try {
      const storedActiveItems = JSON.parse(localStorage.getItem('activeItems') || '[]');
      if (storedActiveItems) {
        setList((prevList) =>
          prevList.map((item) => ({
            ...item,
            isActive: storedActiveItems.includes(item.title),
          }))
        );
      }
    } catch (error) {
      console.error('Error loading active items:', error);
    }
  };

  const toggleSidebar = () => {
    if (!isSidebarHidden) {
      setIsSidebarHidden(true);
      setTimeout(() => setSidebarDisplay('none'), 300);
    } else {
      setSidebarDisplay('block');
      setTimeout(() => setIsSidebarHidden(false), 0);
    }
  };

  useEffect(() => {
    loadActiveItems();
  }, []);

  useEffect(() => {
    saveActiveItems();
  }, [list]);

  return (
    <div className={styles.projects}>
      <ProjectsNav onToggleSidebar={toggleSidebar} />
      <aside
        className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ''}`}
        style={{ display: sidebarDisplay }}
      >
        <ProjectsSide
          isSidebarHidden={isSidebarHidden}
          list={list}
          onToggleActive={toggleActive}
        />
        <SelectTab activeItems={activeItems} onRemoveItem={removeItem} />
      </aside>
      <ProjectsFilter activeItems={activeItems} />
    </div>
  );
};

export default Projects;