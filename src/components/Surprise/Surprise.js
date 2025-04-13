import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Plan%20the%20Perfect%20Surprise/Him-25-9-24.png",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Plan%20the%20Perfect%20Surprise/Her-25-9-24.png",
      text: "",
      anchor: "#"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Plan%20the%20Perfect%20Surprise/Them-25-9-24.png",
      text: "",
      anchor: "#"
    },
  ]
};

export default function SurpriseSection() {
  return (
    <>
      <h1 className="container heading">Plan The Perfect Surprise</h1>
      <div className="container flex gap Surprise-bg surp">
        {homePage.Explore.map((card, index) => (
          <Card
            key={index}
            type="test1"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Buy Now" 
            btnLink={card.anchor}
            showButton={true} 
          />
        ))}
      </div>
    </>
  );
}
