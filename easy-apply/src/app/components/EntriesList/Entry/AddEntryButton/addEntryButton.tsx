"use client";
import React from 'react';
import styles from './addEntryButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddEntryButton: React.FC = () => {

    return (
        <div className={styles.addEntryButtonContainer}>
            <button className={styles.addEntryButton}>
                <FontAwesomeIcon icon={faPlus} size='2x' />
            </button>
        </div>
    );
};

export default AddEntryButton;