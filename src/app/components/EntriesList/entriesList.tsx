import React, { useContext, useEffect, useState } from 'react';
import { EditContext } from '@/contexts/editContext';
import { v4 as uuidv4 } from 'uuid';
import Entry from './Entry/entry';
import styles from './entriesList.module.css';
import defaultEntries from '../../defaultEntries.json';
import AddEntryButton from './Entry/AddEntryButton/addEntryButton';

const MAX_ENTRIES = 21;

type Entry = {
    id: string;
    title: string;
};

const EntriesList: React.FC = () => {
    const { isEditing } = useContext(EditContext);
    const [entryList, setEntryList] = useState(() =>{
        // Load entryList from local storage if it exists, otherwise use defaultEntries
        const storedEntries = localStorage.getItem('entryList');
        return storedEntries ? JSON.parse(storedEntries) : defaultEntries;
    });

    useEffect(() => { 
        localStorage.setItem('entryList', JSON.stringify(entryList));
    }, [entryList]);

    const addNewEntry = () => {
        const newEntry = {
            id: uuidv4(),
            title: "New Entry"
        };
        setEntryList([...entryList, newEntry]);
    };

    const removeEntry = (id: string) => {
        setEntryList(entryList.filter((entry: Entry) => entry.id !== id));
    };

    const changeTitle = (id: string, newTitle: string) => {
        setEntryList(entryList.map((entry: Entry) => entry.id === id ? {...entry, title: newTitle} : entry));
    };

    return (
        <div className={styles.entriesList}>
            {entryList.map((entry: Entry) => (
                <Entry key={entry.id} 
                id={entry.id} 
                title={entry.title} 
                onRemove={removeEntry}
                onTitleChange={changeTitle}/>
            ))}
            {isEditing && entryList.length < MAX_ENTRIES && <AddEntryButton onClick={addNewEntry} />}
        </div>
    );
};


export default EntriesList;