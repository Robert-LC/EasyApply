import React from 'react';
import styles from './addRemoveRowsButton.module.css';

/**
 * AddRemoveRowsButton Component when clicked opens an edit mode
 * where entries can be added or removed
 */
const AddRemoveRowsButton: React.FC = () => {
    const [isEditing, setIsEditing] = React.useState(false);

    const handleAddRemoveButtonClick = () => {
        setIsEditing(true);
    };

    const handleDoneButtonClick = () => {
        setIsEditing(false);
    };

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.addRemoveRowsButton} onClick={handleAddRemoveButtonClick}>
                Add/Remove Rows
            </button>
            {isEditing && (
                <div>
                    <button className={styles.doneButton}onClick={handleDoneButtonClick}>Done</button>
                </div>
            )}
        </div>
    );
};

export default AddRemoveRowsButton;