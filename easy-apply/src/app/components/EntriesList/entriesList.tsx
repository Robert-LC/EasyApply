import React from 'react';
import Entry from '../Entry/entry';
import styles from './entriesList.module.css';

const EntriesList: React.FC = () => {
    const entries = [
        { id: 1, title: 'Entry 1' },
        { id: 2, title: 'Entry 2' },
        { id: 3, title: 'Entry 3' },
    ];

    return (
        <div className={styles.entriesList}>
            {entries.map((entry) => (
                <Entry key={entry.id} id={entry.id.toString()} />
            ))}
        </div>
    );
};

export default EntriesList;