import React from 'react';
import Entry from './entry';

const EntriesList: React.FC = () => {
    const entries = [
        { id: 1, title: 'Entry 1' },
        { id: 2, title: 'Entry 2' },
        { id: 3, title: 'Entry 3' },
    ];

    return (
        <div>
            {entries.map((entry) => (
                <Entry key={entry.id}  />
            ))}
        </div>
    );
};

export default EntriesList;