import React, { useEffect, useState } from "react";
import LinksCard from "../LinksCard/LinksCard";
import styles from "./Links.module.css";

const allLinks = [
  { type: "link", label: "Same Day", imageSrc: "https://beta.fnp.com/icons/same-day-desktop.svg", url: "/same-day-delivery" },
  { type: "link", label: "Corporate", imageSrc: "https://beta.fnp.com/icons/corporate-gift.svg", url: "/corporate" },
  { type: "link", label: "Cart", imageSrc: "https://beta.fnp.com/icons/cart.svg", url: "/cart" },
  { 
    type: "dropdown", imageSrc: "https://beta.fnp.com/icons/user-square-desktop.svg", label: "Hi Guest", options: [
      { label: "Login/Register", imageSrc: "https://beta.fnp.com/icons/login-register.svg", url: "#" },
      { label: "My Account", imageSrc: "https://beta.fnp.com/icons/my-account-user.svg", url: "#" },
      { label: "fnpCash", imageSrc: "https://beta.fnp.com/icons/brownie-Points.svg", url: "#" },
      { label: "My Orders", imageSrc: "https://beta.fnp.com/icons/my-order.svg", url: "#" },
      { label: "Contact Us", imageSrc: "https://beta.fnp.com/icons/contact-us.svg", url: "#" },
      { label: "FAQs", imageSrc: "https://beta.fnp.com/icons/faq-message-question.svg", url: "#" }
    ] 
  },
  { 
    type: "dropdown", imageSrc: "https://beta.fnp.com/icons/more-square.svg", label: "More", options: [
      { label: "Reminder", imageSrc: "https://beta.fnp.com/icons/reminder.svg", url: "#" },
      { label: "Start an FNP Franchise", imageSrc: "https://beta.fnp.com/icons/FNP-franchise.svg", url: "#" },
      { label: "Become a Vendor", imageSrc: "https://beta.fnp.com/icons/become-a-vendor.svg", url: "#" },
      { label: "Birthday/Wedding Decor", imageSrc: "https://beta.fnp.com/icons/balloon-birthday-wedding-decor.svg", url: "#" },
      { label: "Media", imageSrc: "https://beta.fnp.com/icons/media.svg", url: "#" },
    ] 
  }
];

const extraMobileLinks = [
  { type: "link", label: "Home", imageSrc: "../images/fnp-gift.svg", url: "/" },
  { type: "link", label: "All Gifts", imageSrc: "../images/gift.png", url: "/all-gifts" },
  { type: "link", label: "AI Chat", imageSrc: "../images/chat.png", url: "/chat" },
  { type: "link", label: "Same Day", imageSrc: "../images/truck.png", url: "/same-day-delivery" },
  { type: "link", label: "Corporate", imageSrc: "../images/relationship.png", url: "/corporate" },
  { 
    type: "dropdown", label: "More", imageSrc: "../images/more.png", options: [
      { label: "Reminder", imageSrc: "https://beta.fnp.com/icons/reminder.svg", url: "#" },
      { label: "Start an FNP Franchise", imageSrc: "https://beta.fnp.com/icons/FNP-franchise.svg", url: "#" },
      { label: "Become a Vendor", imageSrc: "https://beta.fnp.com/icons/become-a-vendor.svg", url: "#" },
      { label: "Birthday/Wedding Decor", imageSrc: "https://beta.fnp.com/icons/balloon-birthday-wedding-decor.svg", url: "#" },
      { label: "Media", imageSrc: "https://beta.fnp.com/icons/media.svg", url: "#" },
    ]
  }
];

const Links = () => {
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 854);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 854;
      setIsMobile(mobileView);

      const updatedLinks = mobileView
        ? allLinks.filter(link => !["Same Day", "Corporate", "More"].includes(link.label)).map(link => ({ ...link, label: "" }))
        : allLinks;

      setFilteredLinks(updatedLinks);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!filteredLinks.length) return null;

  return (
    <>
      <nav className={styles.linksnavbar}>
        {filteredLinks.map((item, index) => (
          <LinksCard key={index} {...item} />
        ))}
      </nav>

      {isMobile && (
        <nav className={styles.mobileNav}>
          {extraMobileLinks.map((item, index) => (
            <LinksCard key={`mobile-${index}`} {...{ ...item, label: "" }} />
          ))}
        </nav>
      )}
    </>
  );
};

export default Links;
