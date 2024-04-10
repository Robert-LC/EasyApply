"use client";
import React from "react";
import styles from "./removeEntryButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface RemoveEntryButtonProps {
    onClick: () => void;

}

/**
 *RemoveEntryButton Component when clicked removes an entry 
 */
const RemoveEntryButton: React.FC<RemoveEntryButtonProps> = ({ onClick }) => {
    return (
        <div className={styles.removeEntryButtonContainer}>
            <button className={styles.removeEntryButton} onClick={onClick}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>    
    );
};

export default RemoveEntryButton;