import React from 'react';
import styles from './entry.module.css';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import EntryTextBox from '../EntryTextBox/entryTextBox';

const Entry: React.FC = () => {
    return (
        <div className={styles.entry}>
            <EntryTextBox />
            <ClipboardButton />
        </div>
    );
};

export default Entry;