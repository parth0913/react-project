import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, options, imageSrc, imageAlt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  
  const toggleDropdown = (event) => {
    event.stopPropagation(); 
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button className={styles.button} onClick={toggleDropdown}>
        
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={imageAlt || "Dropdown Icon"} 
            className={styles.image} 
            onClick={toggleDropdown} 
          />
        )}
        <span>{title}</span> 
        </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={option.url}>
                {option.imageSrc && (
                  <img 
                    src={option.imageSrc} 
                    alt={option.label} 
                    className={styles.optionImage} 
                  />
                )}
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
