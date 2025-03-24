import React from 'react';
import styles from './SelectTab.module.scss';

interface SelectTabProps {
    activeItems: string[];
    onRemoveItem: (item: string) => void;
}

const SelectTab: React.FC<SelectTabProps> = ({ activeItems, onRemoveItem }) => {
    return (
        <div className={styles.selectTab}>
            <ul>
                {activeItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <span
                            className={styles.remove}
                            onClick={() => onRemoveItem(item)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectTab;
