"use client"
import React, { useContext } from 'react';
import { EditContext } from '../../../../contexts/editContext';
import styles from './entry.module.css';
import EntryTextBox from './EntryTextBox/entryTextBox';
import TitleTextBox from '../../TitleTextBox/titleTextBox';
import ClipboardButton from '../ClipboardButton/clipboardButton';
import RemoveEntryButton from './RemoveEntryButton/removeEntryButton';



interface EntryProps {
    id: string;
    title: string;
    onRemove: (id: number) => void;
}

const Entry: React.FC<EntryProps> = ({ id, title, onRemove }) => {
    const [textValue, setTextValue] = React.useState('');
    const { isEditing } = useContext(EditContext);

    return (
        <div id={`Entry-${id}`} className={styles.entry}>
            <div className={styles.textInput}>
                <TitleTextBox title={title} />
                <EntryTextBox textValue={textValue} setTextValue={setTextValue}/>
            </div>
            <div className={styles.buttonContainer}>
                <div style={{ visibility: isEditing ? 'visible' : 'hidden' }}>
                    <RemoveEntryButton onClick={() => onRemove(parseInt(id))}/>
                </div>
                <ClipboardButton textValue={textValue} />
            </div> 
        </div>
    );
};

export default Entry;