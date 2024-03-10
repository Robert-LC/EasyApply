"use client"
import React from 'react';
import styles from './entry.module.css';
import EntryTextBox from '../../EntryTextBox/entryTextBox';
import TitleTextBox from '../../TitleTextBox/titleTextBox';
import ClipboardButton from '../../ClipboardButton/clipboardButton';
import RemoveEntryButton from '../../Toolbar/RemoveEntryButton/removeEntryButton';

interface EntryProps {
    id: string;
    title: string;
}

const Entry: React.FC<EntryProps> = ({ id, title }) => {
    const [textValue, setTextValue] = React.useState('');
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div id={`Entry-${id}`} className={styles.entry}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={styles.textInput}>
                <TitleTextBox title={title} />
                <EntryTextBox textValue={textValue} setTextValue={setTextValue}/>
            </div>
            <div className={styles.buttonContainer}>
                <div style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
                    <RemoveEntryButton />
                </div>
                <ClipboardButton textValue={textValue} />
            </div> 
        </div>
    );
};

export default Entry;