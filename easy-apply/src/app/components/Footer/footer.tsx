"use client";
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>EasyApply by Robert Locicero</h2>
            </div>
        </footer>
    );
};

export default Footer;