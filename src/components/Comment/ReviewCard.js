import React from "react";
import styles from"./ReviewCard.module.css";

const ReviewCard = ({ name, rating, comment, occasion, city, date }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.avatar}>{name.charAt(0)}</div>
        <div>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < rating ? styles.filledStar : styles.emptyStar}>★</span>
        ))}
      </div>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.tags}>
        <span className={styles.tag}>Occasion: {occasion}</span>
        <span className={styles.tag}>City: {city}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
