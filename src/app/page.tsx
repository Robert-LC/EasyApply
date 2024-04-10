"use client";
import React from "react";
import styles from "./page.module.css";
import EntriesList from "./components/EntriesList/entriesList";
import Footer from "./components/Footer/footer";
import Toolbar from "./components/Toolbar/toolbar";
import { EditContextProvider } from "../contexts/editContext";

export default function Home() {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className={styles.appContainer}>
      <EditContextProvider>
        <Toolbar />
        <EntriesList />
      </EditContextProvider>
      <Footer />
    </div>
  );
}
