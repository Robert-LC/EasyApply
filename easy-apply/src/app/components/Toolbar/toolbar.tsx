"use client";
import React from 'react';
import AddRemoveRowsButton from './AddRemoveRowsButton/addRemoveRowsButton';
import styles from './toolbar.module.css';

const Toolbar: React.FC = () => {
    return (
        <div className={styles.toolbar}>
            <AddRemoveRowsButton />
        </div>
    );
};

export default Toolbar;