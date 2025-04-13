import React, { useState } from "react";
import styles from "./Location.module.css";
import { MdClose, MdArrowDropDown } from "react-icons/md";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
];

const LocationModal = ({ onClose, position }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={styles.modal}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className={styles.header}>
        <h3>Let's Personalize Your Experience!</h3>
        <p>Find the perfect gifts for you or your loved ones - it's like magic!</p>
        <MdClose className={styles.closeBtn} onClick={onClose} />
      </div>

      <div className={styles.countryDropdown} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className={styles.flag}
        />
        {selectedCountry.name}
        <MdArrowDropDown className={styles.arrowIcon} />

        {dropdownOpen && (
          <ul className={styles.dropdownMenu}>
            {countries.map((country, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelectedCountry(country);
                  setDropdownOpen(false);
                }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className={styles.flag}
                />
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        className={styles.input}
        placeholder="Enter Receiver’s pincode, location, area"
      />
      <button className={styles.continueBtn} onClick={onClose}>
        Continue Shopping
      </button>
    </div>
  );
};

export default LocationModal;
