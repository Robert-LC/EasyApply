"use client"
import React, { useState } from 'react';
import styles from './entryTextBox.module.css';

const EntryTextBox: React.FC = () => {
    const [text, setText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.entryTextBoxContainer}>
            <input className={styles.entryTextBox} type="text" value={text} onChange={handleChange} />
        </div>
    );
};

export default EntryTextBox;