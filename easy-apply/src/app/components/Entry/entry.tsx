import React from 'react';
import styles from './entry.module.css';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import EntryTextBox from '../EntryTextBox/entryTextBox';
import TitleTextBox from '../TitleTextBox/titleTextBox';

const Entry: React.FC = () => {
    return (
        <div className={styles.entry}>
            <div className={styles.textInputs}>
                <TitleTextBox />
                <EntryTextBox />
            </div>
            <ClipboardButton />
        </div>
    );
};

export default Entry;