import React, { useContext, useState } from 'react';
import { EditContext } from '@/contexts/editContext';
import { v4 as uuidv4 } from 'uuid';
import Entry from './Entry/entry';
import styles from './entriesList.module.css';
import defaultEntries from '../../defaultEntries.json';
import AddEntryButton from './Entry/AddEntryButton/addEntryButton';

const MAX_ENTRIES = 21;

const EntriesList: React.FC = () => {
    const { isEditing } = useContext(EditContext);
    const [entryList, setEntryList] = useState(defaultEntries);

    const addNewEntry = () => {
        const newEntry = {
            id: uuidv4(),
            title: "New Entry"
        };
        setEntryList([...entryList, newEntry]);
    };

    const removeEntry = (id: string) => {
        setEntryList(entryList.filter((entry) => entry.id !== id));
    };

    return (
        <div className={styles.entriesList}>
            {entryList.map((entry) => (
                <Entry key={entry.id} 
                id={entry.id} 
                title={entry.title} 
                onRemove={removeEntry}/>
            ))}
            {isEditing && entryList.length < MAX_ENTRIES && <AddEntryButton onClick={addNewEntry} />}
        </div>
    );
};


export default EntriesList;