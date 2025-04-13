import React, { useState, useRef } from 'react';
import styles from './DropDownBar.module.css';
import { RiArrowDownSLine } from "react-icons/ri";

const dropdownTitles = [
  'Birthday', 'Occasions', 'Anniversary', 'Cakes',
  'Flowers', 'Personalised', 'Plants', 'Chocolates',
  'Combos', 'Lifestyle', 'Global', 'Trend'
];

const allDropdownSections = {
  Birthday: [
    { title: 'Must Haves', items: ['Cakes', 'Flowers', 'Combos','Cakes', 'Flowers', 'Combos','Cakes', 'Flowers', 'Combos','Cakes', 'Flowers', 'Combos'] },
    { title: 'Prime Picks', items: ['Bestsellers', 'Same Day Delivery'] },
    { title: 'Personal Picks', items: ['Bestsellers', 'Same Day Delivery'] },
    { title: 'Age Perfect Gifts', items: ['Bestsellers', 'Same Day Delivery'] },
    { title: 'Treasure Trove', items: ['Bestsellers', 'Same Day Delivery'] },
    { title: 'Price Wise Gifts', items: ['Bestsellers', 'Same Day Delivery'] }
  ],
  Occasions: [
    { title: 'Festive Vibes', items: ['Diwali', 'Christmas', 'Eid'] },
    { title: 'Moments of Joy', items: ['Valentine\'s Day', 'Mother\'s Day'] },
    { title: 'Milestone Moments', items: ['Valentine\'s Day', 'Mother\'s Day'] }
  ],
  Anniversary: [
    { title: 'Gift Types', items: ['Roses', 'Anniversary Cakes'] },
    { title: 'Relationship', items: ['For Him', 'For Her'] },
    { title: 'Relationship', items: ['For Him', 'For Her'] },
    { title: 'Relationship', items: ['For Him', 'For Her'] },
    { title: 'Relationship', items: ['For Him', 'For Her'] },
    { title: 'Relationship', items: ['For Him', 'For Her'] }
  ],
  Cakes: [
    { title: 'Flavours', items: ['Chocolate', 'Black Forest', 'Red Velvet'] },
    { title: 'Types', items: ['Eggless', 'Photo Cakes'] },
    { title: 'Types', items: ['Eggless', 'Photo Cakes'] },
    { title: 'Types', items: ['Eggless', 'Photo Cakes'] },
    { title: 'Types', items: ['Eggless', 'Photo Cakes'] }
  ],
  Flowers: [
    { title: 'By Type', items: ['Roses', 'Lilies', 'Orchids'] },
    { title: 'By Arrangement', items: ['Bouquets', 'Baskets'] },
    { title: 'By Arrangement', items: ['Bouquets', 'Baskets'] },
    { title: 'By Arrangement', items: ['Bouquets', 'Baskets'] },
    { title: 'By Arrangement', items: ['Bouquets', 'Baskets'] }
  ],
  Personalised: [
    { title: 'Gifts', items: ['Mugs', 'Cushions', 'Photo Frames'] },
    { title: 'For Whom', items: ['For Him', 'For Her'] },
    { title: 'For Whom', items: ['For Him', 'For Her'] },
    { title: 'For Whom', items: ['For Him', 'For Her'] },
    { title: 'For Whom', items: ['For Him', 'For Her'] }
  ],
  Plants: [
    { title: 'Types', items: ['Indoor', 'Air Purifying', 'Lucky Bamboo'] },
    { title: 'Combos', items: ['Plants with Chocolates', 'Plants with Mugs'] },
    { title: 'Combos', items: ['Plants with Chocolates', 'Plants with Mugs'] },
    { title: 'Combos', items: ['Plants with Chocolates', 'Plants with Mugs'] },
    { title: 'Combos', items: ['Plants with Chocolates', 'Plants with Mugs'] }
  ],
  Chocolates: [
    { title: 'Brands', items: ['Ferrero Rocher', 'Cadbury', 'Lindt'] },
    { title: 'Combos', items: ['Chocolates with Flowers', 'Choco Hampers'] },
    { title: 'Combos', items: ['Chocolates with Flowers', 'Choco Hampers'] },
    { title: 'Combos', items: ['Chocolates with Flowers', 'Choco Hampers'] },
    { title: 'Combos', items: ['Chocolates with Flowers', 'Choco Hampers'] }
  ],
  Combos: [
    { title: 'Popular Combos', items: ['Cakes & Flowers', 'Plants & Chocolates'] },
    { title: 'Occasion-Based', items: ['Birthday Combos', 'Anniversary Combos'] },
    { title: 'Occasion-Based', items: ['Birthday Combos', 'Anniversary Combos'] },
    { title: 'Occasion-Based', items: ['Birthday Combos', 'Anniversary Combos'] }
  ],
  Lifestyle: [
    { title: 'Fashion & More', items: ['Wallets', 'Perfumes'] },
    { title: 'Home Decor', items: ['Candles', 'Showpieces'] },
    { title: 'Home Decor', items: ['Candles', 'Showpieces'] },
    { title: 'Home Decor', items: ['Candles', 'Showpieces'] },
    { title: 'Home Decor', items: ['Candles', 'Showpieces'] },
    { title: 'Home Decor', items: ['Candles', 'Showpieces'] }
  ],
  Global: [
    { title: 'Send From Abroad', items: ['USA to India', 'UK to India'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] },
    { title: 'Send International', items: ['India to USA', 'India to Canada'] }
  ],
  Trend: [
    { title: 'What\'s Hot', items: ['Eco-Friendly Gifts', 'Custom Bobbleheads'] },
    { title: 'Featured', items: ['New Arrivals', 'Top Rated'] },
    { title: 'Featured', items: ['New Arrivals', 'Top Rated'] },
    { title: 'Featured', items: ['New Arrivals', 'Top Rated'] },
    { title: 'Featured', items: ['New Arrivals', 'Top Rated'] }
  ]
};
const DropDownBar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseOver = (index) => {
    clearTimeout(timeoutRef.current);
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
    }, 200);
  };

  return (
    <div className={styles.DropBarWrapper}>
      <div className={styles.DropBar}>
        {dropdownTitles.map((title, index) => (
          <div
            key={index}
            className={styles.dropdownWrapper}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <div className={styles.dropdownContainer}>
              <span className={styles.dropdownTrigger}>
                {title} <RiArrowDownSLine className={styles.arrowIcon} />
              </span>
            </div>
            <div
              className={`${styles.dropdownContent} ${
                hoverIndex === index ? styles.showDropdown : ''
              }`}
            >
              {allDropdownSections[title]?.map((section, i) => (
                <div className={styles.dropdownSection} key={i}>
                  <h4>{section.title}</h4>
                  {section.items.map((item, j) => (
                    <p key={j}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownBar;