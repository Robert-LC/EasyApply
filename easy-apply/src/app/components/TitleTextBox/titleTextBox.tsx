"use client"
import React, { useState, useEffect } from 'react';
import styles from './titleTextBox.module.css';


interface TitleTextBoxProps {
    title: string;
    onTitleChange: (newTitle: string) => void;
}

const TitleTextBox: React.FC<TitleTextBoxProps> = ({ title, onTitleChange }) => {
    const [currTitle, setTitle] = useState(title);

    // Update the local state when the title prop changes
    useEffect(() => {
        setTitle(title);
    }, [title]);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        onTitleChange(e.target.value);
    }

    return (
        <div className={styles.titleTextBoxContainer}>
            <input
                className={styles.titleTextBox}
                type="text"
                id="title"
                value={currTitle}
                onChange={onChange}
            />
        </div>
    );
};

export default TitleTextBox;