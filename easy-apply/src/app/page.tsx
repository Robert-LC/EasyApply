import React from "react";
import styles from "./page.module.css";
import EntriesList from "./components/EntriesList/entriesList";
import Footer from "./components/Footer/footer";
import Toolbar from "./components/Toolbar/toolbar";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Toolbar />
      <EntriesList />
      <Footer />
    </div>
  );
}
