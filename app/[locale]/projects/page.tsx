'use client';

import SelectTab from '@/components/global/SelectTab';
import ProjectsFilter from '@/components/navigation/projects/ProjectsFilter';
import ProjectsNav from '@/components/navigation/projects/ProjectsNav';
import ProjectsSide from '@/components/sidebar/projects/ProjectsSide';
import { useEffect, useMemo, useState } from 'react';
import styles from './project.module.scss';

type ProjectItem = {
    title: string;
    imgAlt: string;
    isActive: boolean;
};

const Projects = () => {
    const [sidebarDisplay, setSidebarDisplay] = useState('block');
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    const [list, setList] = useState([
        { title: 'go', imgAlt: 'go icon', isActive: true },
        { title: 'ts', imgAlt: 'Typescript icon', isActive: true },
        { title: 'php', imgAlt: 'php icon', isActive: true },
        { title: 'html', imgAlt: 'html icon', isActive: true },
        { title: 'css', imgAlt: 'css icon', isActive: true },
        { title: 'react', imgAlt: 'React icon', isActive: true },
    ]);

    const activeItems = useMemo(
        () => list.filter(item => item.isActive).map(item => item.title),
        [list],
    );

    const toggleActive = (item: ProjectItem) => {
        setList(prevList =>
            prevList.map(prevItem =>
                prevItem === item
                    ? { ...prevItem, isActive: !prevItem.isActive }
                    : prevItem,
            ),
        );
    };

    const removeItem = (itemTitle: string) => {
        setList(prevList =>
            prevList.map(item =>
                item.title === itemTitle ? { ...item, isActive: false } : item,
            ),
        );
    };

    const loadActiveItems = () => {
        try {
            const storedActiveItems = JSON.parse(
                localStorage.getItem('activeItems') || '[]',
            );
            if (storedActiveItems) {
                setList(prevList =>
                    prevList.map(item => ({
                        ...item,
                        isActive: storedActiveItems.includes(item.title),
                    })),
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
                <SelectTab
                    activeItems={activeItems}
                    onRemoveItem={removeItem}
                />
            </aside>
            <ProjectsFilter activeItems={activeItems} />
        </div>
    );
};

export default Projects;
