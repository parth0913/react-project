import React from "react";
import ReviewCard from "./ReviewCard";
import styles from"./CustomerReviews.module.css";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Parth Garg",
      rating: 4,
      comment: "The flowers were delivered on time.",
      occasion: "Birthday",
      city: "Delhi",
      date: "4 days ago",
    },
    {
      name: "Parth",
      rating: 5,
      comment: "Absolutely loved the bouquet! Flowers were fresh and beautiful.",
      occasion: "Anniversary",
      city: "Mumbai",
      date: "1 week ago",
    },
    {
      name: "Parth",
      rating: 5,
      comment: "Absolutely loved the bouquet! Flowers were fresh and beautiful.",
      occasion: "Anniversary",
      city: "Mumbai",
      date: "1 week ago",
    },
    {
      name: "Parth",
      rating: 5,
      comment: "Absolutely loved the bouquet! Flowers were fresh and beautiful.",
      occasion: "Anniversary",
      city: "Mumbai",
      date: "1 week ago",
    }
  ];

  return (
    <div className={styles.container}>
      <h2>Customer Reviews</h2>
      <div className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />

        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
