"use client"
import React from 'react';
import styles from './entry.module.css';
import EntryTextBox from '../EntryTextBox/entryTextBox';
import TitleTextBox from '../TitleTextBox/titleTextBox';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import RemoveEntryButton from '../RemoveEntryButton/removeEntryButton';

interface EntryProps {
    id: string;
    title: string;
}

const Entry: React.FC<EntryProps> = ({ id, title }) => {
    const [textValue, setTextValue] = React.useState('');

    return (
        <div id={`Entry-${id}`} className={styles.entry}>
            <div className={styles.textInput}>
                <TitleTextBox title={title} />
                <EntryTextBox textValue={textValue} setTextValue={setTextValue}/>
            </div>
            <div className={styles.buttonContainer}>
                <RemoveEntryButton />
                <ClipboardButton textValue={textValue} />
            </div> 
        </div>
    );
};

export default Entry;