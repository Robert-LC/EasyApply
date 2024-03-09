"use client"
import React from 'react';
import styles from './entry.module.css';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import EntryTextBox from '../EntryTextBox/entryTextBox';
import TitleTextBox from '../TitleTextBox/titleTextBox';

interface EntryProps {
    id: string;
    title: string;
}

const Entry: React.FC<EntryProps> = ({ id, title }) => {
    const [textValue, setTextValue] = React.useState('');

    return (
        <div id={`Entry-${id}`} className={styles.entry}>
            <div className={styles.textInputs}>
                <TitleTextBox title={title} />
                <EntryTextBox textValue={textValue} setTextValue={setTextValue}/>
            </div>
            <ClipboardButton textValue={textValue} />
        </div>
    );
};

export default Entry;