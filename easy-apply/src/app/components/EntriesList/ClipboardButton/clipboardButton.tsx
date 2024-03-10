"use client"
import React from 'react';
import styles from './clipboardButton.module.css';

interface ClipboardButtonProps {
    textValue: string;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ textValue }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(textValue);
    };

    return (
        <div className={styles.clipboardButtonContainer}>
            <button onClick={handleClick} className={styles.clipboardButton}>
                Copy to Clipboard
            </button>
        </div>    
    );
};

export default ClipboardButton;