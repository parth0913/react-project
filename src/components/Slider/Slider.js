import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './Slider.module.css';

const Slider = ({ items = [], options, isImgSlider = false, styles = {} }) => {
  if (!items.length) return null;

  return (
    <Splide options={options} aria-label="Reusable Slider">
      {items.map((item, index) => (
        <SplideSlide key={index} className={styles.slideItem}>
          {isImgSlider ? (
            <a href={item.anchor} className={styles.cardAnchor}>
              <img className={styles.image} src={item.imgSrc} alt={item.text} />
              <p className={styles.text}>{item.text}</p>
            </a>
          ) : (
            <img className={styles.image} src={item.imgSrc} alt={item.text} />
          )}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
