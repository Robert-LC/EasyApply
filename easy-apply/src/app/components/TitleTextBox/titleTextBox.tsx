"use client"
import React from 'react';
import styles from './titleTextBox.module.css';


interface TitleTextBoxProps {
    title: string;
}

const TitleTextBox: React.FC<TitleTextBoxProps> = ({ title }) => {
    const [currTitle, setTitle] = React.useState(title);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
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