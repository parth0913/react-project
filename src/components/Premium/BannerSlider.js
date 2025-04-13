import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import styles from "./BannerSlider.module.css"; 

const desktopBannerItems = [
  {
    imgSrc: "./images/premium-25-9-24.webp",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_desk_top_banner_1"
  },
  {
    imgSrc: "./images/blooms-25-9-24.webp",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_desk_top_banner_1"
  }
];

const mobileBannerItems = [
  {
    imgSrc: "./images/premium-25-9-24_1.webp",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_mobile_top_banner_1"
  },
  {
    imgSrc: "./images/bloomss-25-9-24.webp",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_mobile_top_banner_2"
  }
];

const Banner = () => {
  const [bannerItems, setBannerItems] = useState(desktopBannerItems);

  useEffect(() => {
    const updateBanner = () => {
      const isMobile = window.innerWidth <= 768;
      setBannerItems(isMobile ? mobileBannerItems : desktopBannerItems);
    };

    updateBanner(); 

    window.addEventListener("resize", updateBanner); 

    return () => window.removeEventListener("resize", updateBanner); 
  }, []);

  return (
    <div className={styles.bannerWrapper}>
      <Slider
        items={bannerItems}
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true
        }}
        isImgSlider={true}
        isAuto={true}
        styles={{
          slideItem: styles.slideItem,
          image: styles.image
        }}
      />
    </div>
  );
};

export default Banner;
