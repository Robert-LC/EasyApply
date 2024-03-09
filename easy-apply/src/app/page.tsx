import React from "react";
import styles from "./page.module.css";
import EntriesList from "./components/EntriesList/entriesList";

export default function Home() {
  return (
    <main className={styles.main}>
      <EntriesList />
    </main>
  );
}
