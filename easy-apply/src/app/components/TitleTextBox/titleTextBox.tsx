"use client"
import React from 'react';
import styles from './titleTextBox.module.css';


interface TitleTextBoxProps {
    title: string;
}

const TitleTextBox: React.FC<TitleTextBoxProps> = ({ title }) => {

    return (
        <div className={styles.titleTextBoxContainer}>
            <input
                className={styles.titleTextBox}
                type="text"
                id="title"
                value={title}
            />
        </div>
    );
};

export default TitleTextBox;