import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Roses-25-9-24-(1)-DESK-24-10-24.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Gerbaras-25-9-24.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Orchids-25-9-24.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Lily-25-9-24.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Carnations-25-9-24.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Explore%20Our%20Exquisite%20Range/Mixed-25-9-24.jpg",
      text: "",
      anchor: "#"
    },
  ]
};

export default function CardSection() {
  return (
    <div>
      <h1 className="container heading">Explore Our Exquisite Range</h1>
      <div className="container flex gap bg">
        {homePage.Explore.map((card, index) => (
          <Card
            key={index} 
            type="test1"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Explore"
            btnLink={card.anchor}
          />
        ))}

      </div>
    </div>
  );
}
