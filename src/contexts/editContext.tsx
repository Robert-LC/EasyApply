"use client";
import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

interface EditContextInterface {
    isEditing: boolean;
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export const EditContext = createContext<EditContextInterface>({ 
    isEditing: false, 
    setIsEditing: (isEditing) => {} 
});

type EditContextProviderProps = {
    children: React.ReactNode;
}

export const EditContextProvider = ({ children }: EditContextProviderProps) => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <EditContext.Provider value={{ isEditing, setIsEditing }}>
            {children}
        </EditContext.Provider>
    );
}
