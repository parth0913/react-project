import React from "react";
import styles from "./Search.module.css";
import { HiArrowLeft } from "react-icons/hi2";

export default function Search({ onClose }) {
  return (
    <div className={styles.searchBody}>
      <button type="button" className={styles.SearchButton} onClick={onClose}>
        <HiArrowLeft />
      </button>

      <nav className={styles.SearchPopup}>
        <form className={styles.SearchField}>
          <input className={styles.SearchBox} type="search" placeholder="Search..." aria-label="Search" autoFocus />
        </form>
      </nav>
    </div>
  );
}
