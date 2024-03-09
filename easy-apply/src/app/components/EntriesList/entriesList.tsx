import React from 'react';
import Entry from '../Entry/entry';
import styles from './entriesList.module.css';
import entries from '../../defaultEntries.json';

const EntriesList: React.FC = () => {
    return (
        <div className={styles.entriesList}>
            {entries.map((entry) => (
                <Entry key={entry.id} id={entry.id.toString()} title={entry.text}/>
            ))}
        </div>
    );
};

export default EntriesList;