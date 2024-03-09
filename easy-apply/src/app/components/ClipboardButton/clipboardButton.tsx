"use client"
import React from 'react';
import styles from './clipboardButton.module.css';

const ClipboardButton: React.FC = () => {
    const handleClick = () => {
        // Logic to copy text to clipboard
    };

    return (
        <>
            <button onClick={handleClick} className={styles.clipboardButton}>
                Copy to Clipboard
            </button>
        </>    
    );
};

export default ClipboardButton;