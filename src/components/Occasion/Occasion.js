import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "../General/general.css";

const desktopHomePage = {
  Explore: [
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Birthday-25-9-24.jpg", text: "", anchor: "/explore" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Celebrations-25-9-24.jpg", text: "", anchor: "/learn-more" },
    { imgSrc: "/images/Anniversary-25-9-24.webp", text: "", anchor: "/shop" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Housewarming-25-9-24.jpg", text: "", anchor: "/shop" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20love%20you-25-9-24.jpg", text: "", anchor: "/shop" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Desk-8-11-24.jpg", text: "", anchor: "/shop" }
  ]
};

const desktopSmallHomepage = {
  Small: [
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Farewell-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Thank%20You-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20am%20Sorry-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Get%20well%20soon-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20miss%20you-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Condolences-25-9-24.jpg", text: "", anchor: "" }
  ]
};

const mobileHomePage = {
  Explore: [
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Birthday-25-9-24.jpg", text: "", anchor: "/explore" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Anniversary-25-9-24.jpg", text: "", anchor: "/learn-more" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Celebrations-25-9-24.jpg", text: "", anchor: "/shop" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Housewarming-25-9-24.jpg", text: "", anchor: "/shop" },
  ]
};

const mobileSmallHomepage = {
  Small: [
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Farewell-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Thank%20you-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/I%20am%20sorry-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/I%20love%20you-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/wedding_mob.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/get%20weel%20soon-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/I%20miss%20you-25-9-24.jpg", text: "", anchor: "" },
    { imgSrc: "	https://beta.fnp.com/assets/images/custom/flowers-24/every-occasion/Condolenses-25-9-24.jpg", text: "", anchor: "" },
  ]
};

export default function OccasionSection() {
  const [homePage, setHomePage] = useState(desktopHomePage);
  const [smallHomePage, setSmallHomePage] = useState(desktopSmallHomepage);

  useEffect(() => {
    const updateImages = () => {
      const isMobile = window.innerWidth <= 768;
      setHomePage(isMobile ? mobileHomePage : desktopHomePage);
      setSmallHomePage(isMobile ? mobileSmallHomepage : desktopSmallHomepage);
    };

    updateImages(); 
    window.addEventListener("resize", updateImages); 

    return () => window.removeEventListener("resize", updateImages); 
  }, []);

  return (
    <>
    <div className="Back-img">
      <h1 className="container heading">Flowers for Every Occasion</h1>
      <div className="container grid-3-col box">
        {homePage.Explore.map((card, index) => (
          <Card
            key={index}
            type="test2"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Explore"
            btnLink={card.anchor}
          />
        ))}
      </div>
      <div className="flex flowers-row">
        {smallHomePage.Small.slice(0, 6).map((card, index) => (
          <Card
            key={index}
            type="test2"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Small"
            btnLink={card.anchor}
          />
        ))}
      </div>
      </div>
    </>
  );
}
