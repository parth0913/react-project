import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Search from "../Search/Search";
import "./SearchBar.css";

export default function SearchBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 602);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 602);
      if (window.innerWidth > 602) {
        setShowSearch(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="search-container">
      {isMobile ? (
        <>
          {!showSearch ? (
            <CiSearch className="search-icon" onClick={() => setShowSearch(true)} />
          ) : (
            <Search onClose={() => setShowSearch(false)} /> 
          )}
        </>
      ) : (
        <form className="d-flex search-form" role="search">
          <input
            className="search form-control me-2"
            type="search"
            placeholder="Sending goodluck plants or more"
            aria-label="Search"
            style={{ width: "400px", borderRadius: "10px" }}
          />
        </form>
      )}
    </div>
  );
}
