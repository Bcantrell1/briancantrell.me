import { useState, useEffect } from 'react';
import styles from './FoldableTab.module.scss';

interface FoldableTabProps {
  initiallyFolded?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

const FoldableTab: React.FC<FoldableTabProps> = ({ initiallyFolded = false, onToggle, children }) => {
  const [isToggled, setIsToggled] = useState(initiallyFolded);

  useEffect(() => {
    setIsToggled(initiallyFolded);
  }, [initiallyFolded]);

  const toggleFolding = () => {
    setIsToggled((prev) => !prev);
    onToggle?.();
  };

  return (
    <>
      <span className={styles.line} />
      <div className={styles.navTitled}>
        <div
          className={`${styles.foldableTab} ${isToggled ? styles.isFolded : ''}`}
          onClick={toggleFolding}
        >
          <span className="fas fa-triangle" />
          {children}
        </div>
      </div>
    </>
  );
};

export default FoldableTab;