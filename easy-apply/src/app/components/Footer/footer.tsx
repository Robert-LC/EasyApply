"use client";
import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h2>EasyApply by Robert Locicero</h2>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/robert-locicero/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="4x"/>
                </a>
                <a href="https://github.com/Robert-LC/EasyApply" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="4x" color="blank"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;