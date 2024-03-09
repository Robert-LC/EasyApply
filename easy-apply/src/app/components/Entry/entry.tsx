"use client"
import React from 'react';
import styles from './entry.module.css';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import EntryTextBox from '../EntryTextBox/entryTextBox';
import TitleTextBox from '../TitleTextBox/titleTextBox';

interface EntryProps {
    id: string;
}

const Entry: React.FC<EntryProps> = ({ id }) => {
    const [textValue, setTextValue] = React.useState('');

    return (
        <div id={`Entry-${id}`} className={styles.entry}>
            <div className={styles.textInputs}>
                <TitleTextBox />
                <EntryTextBox textValue={textValue} setTextValue={setTextValue}/>
            </div>
            <ClipboardButton textValue={textValue} />
        </div>
    );
};

export default Entry;