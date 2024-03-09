"use client";
import React from "react";
import styles from "./removeEntryButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


const RemoveEntryButton: React.FC = () => {
    // Add your component logic here

    return (
        <div>
            <button className={styles.removeEntryButton}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>    
    );
};

export default RemoveEntryButton;