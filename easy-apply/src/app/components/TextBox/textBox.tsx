"use client"
import React, { useState } from 'react';
import styles from './textBox.module.css';

const TextBox: React.FC = () => {
    const [text, setText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.textBoxContainer}>
            <input className={styles.textBox} type="text" value={text} onChange={handleChange} />
        </div>
    );
};

export default TextBox;