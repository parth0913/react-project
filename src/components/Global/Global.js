import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/USA.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/Canada.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/UK.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/UAE.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/Australia.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/global/Worldwide.jpg",
      text: "",
      anchor: "#"
    },
  ]
};

export default function GlobalSection() {
  return (
    <>
      <h1 className="container heading">Delivering Blooms Globally</h1>
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
    </>
  );
}
