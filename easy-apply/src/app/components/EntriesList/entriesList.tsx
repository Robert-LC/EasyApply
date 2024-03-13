import React, { useContext } from 'react';
import { EditContext } from '@/contexts/editContext';
import Entry from './Entry/entry';
import styles from './entriesList.module.css';
import entries from '../../defaultEntries.json';
import AddEntryButton from './Entry/AddEntryButton/addEntryButton';

const EntriesList: React.FC = () => {
    const { isEditing } = useContext(EditContext);
    return (
        <div className={styles.entriesList}>
            {entries.map((entry) => (
                <Entry key={entry.id} id={entry.id.toString()} title={entry.text}/>
            ))}
            {isEditing && <AddEntryButton />}
        </div>
    );
};

export default EntriesList;