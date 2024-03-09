"use client"
import React from 'react';
import styles from './titleTextBox.module.css';

// Commenting out until I work with functionality
// interface TitleTextBoxProps {
//     title: string;
//     onChange: (value: string) => void;
// }

const TitleTextBox: React.FC = (/*{ onChange }*/) => {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     onChange(event.target.value);
    // };

    return (
        <div className={styles.titleTextBoxContainer}>
            <input
                className={styles.titleTextBox}
                type="text"
                id="title"
                // onChange={handleInputChange}
            />
        </div>
    );
};

export default TitleTextBox;