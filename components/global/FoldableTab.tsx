import { useState, useEffect } from 'react';
import styles from './FoldableTab.module.scss';
import { Triangle } from 'lucide-react';

interface FoldableTabProps {
  initiallyFolded?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
  hasLine?: boolean;
}

const FoldableTab: React.FC<FoldableTabProps> = ({ initiallyFolded = false, onToggle, hasLine = false, children }) => {
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
      <span style={{ display: hasLine ? 'block' : 'none' }} className={styles.line} />
      <div className={styles.navTitled}>
        <div
          className={`${styles.foldableTab} ${isToggled ? styles.isFolded : ''}`}
          onClick={toggleFolding}
        >
          <Triangle color='#fff' />
          {children}
        </div>
      </div>
    </>
  );
};

export default FoldableTab;