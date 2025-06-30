import React, { useState, useEffect } from 'react';
import styles from './ProductCard.module.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval; 
    if (hovered) {
      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % product.images.length);
      }, 1000);
    } else {
      clearInterval(interval);
      setSlideIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered, product.images.length]);

  return (
     <Link to={`/product/${product.id}`} className={styles.cardLink}>
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.images[slideIndex]}
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.rating}>
          <FaStar className={styles.starIcon} />
          {product.rating} | {product.totalReviews}
        </div>
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>₹ {product.price}</p>
        <p className={styles.delivery}>Earliest Delivery: {product.earliestDelivery}</p>
      </div>
    </div>
    </Link>
  );
}
