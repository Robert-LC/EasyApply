import React from 'react';
import styles from './addRemoveRowsButton.module.css';

const AddRemoveRowsButton: React.FC = () => {
    const [isEditing, setIsEditing] = React.useState(false);

    const handleAddRemoveButtonClick = () => {
        setIsEditing(true);
    };

    const handleDoneButtonClick = () => {
        setIsEditing(false);
    };

    return (
        <div>
            <button className={styles.addRemoveRowsButton} onClick={handleAddRemoveButtonClick}>
                Add/Remove Rows
            </button>
            {isEditing && (
                <div>
                    <button onClick={handleDoneButtonClick}>Done</button>
                </div>
            )}
        </div>
    );
};

export default AddRemoveRowsButton;