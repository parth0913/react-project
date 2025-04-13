import React from "react";
import Card from "../Card/Card";  
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Red-25-9-24.png",
      text: "Red",
      anchor: "/explore"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Purple-25-9-24.png",
      text: "Purple",
      anchor: "/learn-more"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Pink-25-9-24.png",
      text: "Pink",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Peach-25-9-24.png",
      text: "Peach",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Warm-25-9-24.png",
      text: "Warm",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Pastel-25-9-24.png",
      text: "Pastel",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Orange-25-9-24.png",
      text: "Orange",
      anchor: "/explore"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Blue-25-9-24.png",
      text: "Blue",
      anchor: "/learn-more"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/White-25-9-24.png",
      text: "White",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Yellow-25-9-24.png",
      text: "Yellow",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Cool-25-9-24.png",
      text: "Cool",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Choose%20a%20Favourite%20Colour/Mixed-25-9-24.png",
      text: "Mixed-",
      anchor: "/shop"
    },
  ]
};  



export default function FavouriteSection() {
  return (
    <>
      <h1 className="container heading">Choose a Favourite Colour</h1>
      <div className="container grid-6-col fav">
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
