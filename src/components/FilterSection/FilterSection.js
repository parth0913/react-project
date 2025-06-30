import React, { useState, useEffect } from 'react';
import styles from './FilterSection.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function FilterSection({ title, options, queryKey }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const selectedFromURL = searchParams.getAll(queryKey);
  const [selectedOptions, setSelectedOptions] = useState(selectedFromURL);

  useEffect(() => {
    setSelectedOptions(searchParams.getAll(queryKey));
  }, [location.search, queryKey]);

  const toggleSection = () => setIsOpen(!isOpen);

  const handleOptionClick = (option, e) => {
    e.preventDefault();
    const current = searchParams.getAll(queryKey);
    let updated;

    if (current.includes(option)) {
      updated = current.filter((item) => item !== option);
    } else {
      updated = [...current, option];
    }

    searchParams.delete(queryKey);
    updated.forEach((val) => searchParams.append(queryKey, val));

    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: false });
  };

  return (
    <div className={styles.section}>
      <div className={styles.header} onClick={toggleSection}>
        <span>{title}</span>
        <span className={styles.toggleIcon}>{isOpen ? '-' : '+'}</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <Link
              href="#"
              key={option}
              onClick={(e) => handleOptionClick(option, e)}
              className={styles.option}
            >
              <input
                type="checkbox"
                readOnly
                checked={selectedOptions.includes(option)}
              />
              {option}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
