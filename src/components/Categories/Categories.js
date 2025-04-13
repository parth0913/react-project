import React from "react";
import Slider from "../Slider/Slider";
import Styles from "./Categories.module.css";

const Categories = () => {
  const items = [
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/All%20Flowers.jpg",
      text: "All Flowers",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/New%20Arrivals.jpg",
      text: "New Arrivals",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Luxury%20Blooms.jpg",
      text: "Luxury Blooms",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Birthday.jpg",
      text: "Birthdays",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Anniversary.jpg",
      text: "Anniversaries",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Section%201/new/Same%20Day%20Delivery.jpg",
      text: "Get Same Day",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Roses.jpg",
      text: "Roses",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Combos.jpg",
      text: "Combos",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Bestsellers.jpg",
      text: "BestSellers",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/International.jpg",
      text: "International",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Preserved%20Flowers.jpg",
      text: "Preserved Flowers",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Flower%20Hampers.jpg",
      text: "Flower Hamper",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Personalised.jpg",
      text: "Personlised",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/Section%201/new/Flower%20Subscription.jpg",
      text: "Flower Subscription",
      anchor: "#"
    },
  ];

  const options = {
    perPage: 1,
    gap: '1rem',
    pagination:false
  };

  return (
    <div className={Styles.sliderWrapper}>
      <Slider
        items={items}
        options={options}
        isImgSlider={true}
        styles={{
          slideItem: Styles.customSlideItem,
          image: Styles.customImage,
          text: Styles.customText,
          cardAnchor: Styles.customCardAnchor,
        }}
      />
    </div>
  );
};

export default Categories;
