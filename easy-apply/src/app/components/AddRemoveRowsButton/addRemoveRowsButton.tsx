import React from 'react';
import styles from './addRemoveRowsButton.module.css';

const AddRemoveRowsButton: React.FC = () => {
    return (
        <div>
            <button className={styles.addRemoveRowsButton}>
                Add/Remove Rows
            </button>
        </div>
    );
};

export default AddRemoveRowsButton;