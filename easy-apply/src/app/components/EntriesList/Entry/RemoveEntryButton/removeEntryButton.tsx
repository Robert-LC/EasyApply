"use client";
import React from "react";
import styles from "./removeEntryButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

/**
 *RemoveEntryButton Component when clicked removes an entry 
 */
const RemoveEntryButton: React.FC = () => {
    return (
        <div className={styles.removeEntryButtonContainer}>
            <button className={styles.removeEntryButton}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>    
    );
};

export default RemoveEntryButton;