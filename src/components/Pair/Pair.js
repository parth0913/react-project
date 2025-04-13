import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/flowers-and-cakes_desk-5-11-24.jpg",
      text: "",
      anchor: "/explore"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/Flowers-and-Chocolates-25-9-24.jpg",
      text: "",
      anchor: "/learn-more"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/Flowers-and-Teddy-Bears-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/Flowers-and-Guitarist-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/flowers-and-plants_desk-5-11-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Pair%20with%20Flowers/Flowers-and-Greeting-Cards-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
  ]
};  



export default function PairSection() {
  return (
    <>
      <h1 className="container heading">Pair With Flowers</h1>
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
