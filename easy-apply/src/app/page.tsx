import React from "react";
import styles from "./page.module.css";
import EntriesList from "./components/EntriesList/entriesList";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
      <EntriesList />
      <Footer />
    </>
  );
}
