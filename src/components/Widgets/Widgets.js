// src/PDP/Widgets.js
import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Widgets.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Widgets() {
  const products = useSelector((state) => state.productData.products);
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5); // little buffer
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    handleScroll(); // init check
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollWrapper}>
        {showLeft && (
          <button className={`${styles.scrollBtn} ${styles.left}`} onClick={() => scroll('left')}>
            <IoIosArrowBack />
          </button>
        )}

        <div className={styles.scrollContainer} ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className={styles.cardWrapper}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {showRight && (
          <button className={`${styles.scrollBtn} ${styles.right}`} onClick={() => scroll('right')}>
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
}
