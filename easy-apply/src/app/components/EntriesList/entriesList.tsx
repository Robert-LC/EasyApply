import React, { useContext, useState } from 'react';
import { EditContext } from '@/contexts/editContext';
import Entry from './Entry/entry';
import styles from './entriesList.module.css';
import defaultEntries from '../../defaultEntries.json';
import AddEntryButton from './Entry/AddEntryButton/addEntryButton';

const EntriesList: React.FC = () => {
    const { isEditing } = useContext(EditContext);
    const [entryList, setEntryList] = useState(defaultEntries);

    const addNewEntry = () => {
        const newEntry = {
            id: entryList.length + 1,
            text: "New Entry"
        };
        setEntryList([...entryList, newEntry]);
    };

    const removeEntry = (id: number) => {
        setEntryList(entryList.filter((entry) => entry.id !== id));
    };

    return (
        <div className={styles.entriesList}>
            {entryList.map((entry) => (
                <Entry key={entry.id} 
                id={entry.id.toString()} 
                title={entry.text} 
                onRemove={removeEntry}/>
            ))}
            {isEditing && <AddEntryButton onClick={addNewEntry} />}
        </div>
    );
};


export default EntriesList;