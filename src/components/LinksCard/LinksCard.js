import React from "react";
import Dropdown from "../Dropdown/Dropdown";  
import styles from "./LinksCard.module.css"; 

const LinksCard = ({ type, label, url, options, imageSrc, imageAlt }) => {
  return (
    <div className={styles.card}>
      {type === "link" ? (
        <a href={url} className={styles.link}>
          <div className={styles.imageContainer}>
            {imageSrc && <img src={imageSrc} alt={imageAlt || "Link Image"} className={styles.image} />}
          </div>
          <span className={styles.label}>{label}</span>
        </a>
      ) : (
        <Dropdown title={label} options={options} imageSrc={imageSrc} imageAlt={imageAlt} />
      )}
    </div>
  );
};

export default LinksCard;
