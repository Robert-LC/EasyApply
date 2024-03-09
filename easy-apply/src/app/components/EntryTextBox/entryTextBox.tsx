import React, { useState } from 'react';
import styles from './entryTextBox.module.css';

interface EntryTextBoxProps {
    textValue: string;
    setTextValue: (value: string) => void;
}

const EntryTextBox: React.FC<EntryTextBoxProps> = ({ textValue, setTextValue }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    return (
        <div className={styles.entryTextBoxContainer}>
            <input className={styles.entryTextBox} type="text" value={textValue} onChange={handleChange} />
        </div>
    );
};

export default EntryTextBox;