import React from 'react';
import styles from './addEntryButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddEntryButtonProps {
    onClick: () => void;
}

const AddEntryButton: React.FC<AddEntryButtonProps> = ({ onClick }) => {

    
    return (
        <div className={styles.addEntryButtonContainer}>
            <button className={styles.addEntryButton} onClick={onClick}>
                <FontAwesomeIcon icon={faPlus} size='2x' />
            </button>
        </div>
    );
};

export default AddEntryButton;