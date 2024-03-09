import React from 'react';
import styles from './entry.module.css';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import TextBox from '../TextBox/textBox';

const Entry: React.FC = () => {
    return (
        <div className={styles.entry}>
            <TextBox />
            <ClipboardButton />
        </div>
    );
};

export default Entry;