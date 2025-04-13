import React from "react";
import styles from "./Card.module.css";
import { GoArrowRight } from "react-icons/go";

export default function Card({ type = "rounded", imgSrc, title, text, btnText, btnLink, showButton = false }) {
  const cardClass = styles[type] ? `${styles[type]}` : styles.card;

  return (
    <div className={cardClass}>
      <a href={btnLink} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
        <img src={imgSrc} className="card-img-top" alt={title} />
        <p className={styles.cardText}>{text}</p>
      </a>
      {showButton && (
        <button className={styles.cardButton} onClick={() => window.location.href = btnLink}>
          {btnText}
          <span className={styles.icon}>
            <GoArrowRight />
          </span>
        </button>
      )}
    </div>
  );
}
