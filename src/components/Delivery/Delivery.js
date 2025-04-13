import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Delhi%20NCR.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Hyderabad.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Pune.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Mumbai.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Chennai.jpg",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://www.fnp.com/assets/images/custom/flowers_24/abroad/Bengaluru.jpg",
      text: "",
      anchor: "#"
    },
  ]
};

export default function DeliverySection() {
  return (
    <>
      <h1 className="container heading">Delivering Across India</h1>
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
