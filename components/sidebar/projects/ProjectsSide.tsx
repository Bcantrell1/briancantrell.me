import React from 'react';
import styles from './ProjectsSide.module.scss';
import CSSIcon from '@/components/svg/CSSIcon';
import ReactIcon from '@/components/svg/ReactIcon';
import TSIcon from '@/components/svg/TSIcon';
import HTMLIcon from '@/components/svg/HTMLIcon';
import PHPIcon from '@/components/svg/PHPIcon';
interface ProjectItem {
  title: string;
  imgAlt: string;
  isActive: boolean;
}

interface ProjectsSideProps {
  list: ProjectItem[];
  isSidebarHidden: boolean;
  onToggleActive: (item: ProjectItem) => void;
}

const componentMap: { [key: string]: React.ComponentType<any> } = {
  html: HTMLIcon,
  css: CSSIcon,
  react: ReactIcon,
  ts: TSIcon,
  php: PHPIcon,
};

const ProjectsSide: React.FC<ProjectsSideProps> = ({ list, isSidebarHidden, onToggleActive }) => {
  return (
    <div className={`${styles.projectsSidebar} ${isSidebarHidden ? styles.hidden : ''}`}>
      {list.map((item) => {
        const SvgComponent = componentMap[item.title];
        return (
          <div key={item.title}>
            <label onClick={(e: React.MouseEvent<HTMLLabelElement>) => { e.preventDefault(); onToggleActive(item); }}>
              <input
                type="checkbox"
                checked={item.isActive}
                onChange={() => onToggleActive(item)}
                onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
              />
              {SvgComponent && (
                <SvgComponent
                  alt={item.imgAlt}
                  className={`${styles.projectSvg} ${item.title}`}
                  onClick={(e: React.MouseEvent<SVGSVGElement>) => e.stopPropagation()}
                />
              )}
              <p
                className={`${styles.projectItem} ${item.isActive ? styles.active : ''}`}
                onClick={(e: React.MouseEvent<HTMLParagraphElement>) => e.stopPropagation()}
              >
                {item.title.toUpperCase()}
              </p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSide;