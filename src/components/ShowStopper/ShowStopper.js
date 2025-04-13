import React from "react";
import Card from "../Card/Card";   
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Flower-Bouquets-25-9-24.jpg",
      text: "",
      anchor: "/explore"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Flower-Arrangements-25-9-24.jpg",
      text: "",
      anchor: "/learn-more"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Standing-Bouquets-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Flower-in-a-Box-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Zodiac-Flowers-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/The%20Showstopper%20Collection/Sleeves-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
  ]
};  



export default function ShowStopperSection() {
  return (
    <>
      <h1 className="container heading">The Showstopper Collection  </h1>
      <div className="container grid-3-col bg">
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
    </>
  );
}
