import React, { useState } from "react";
import SearchIcon from "../../../assets/search-icon.png";
import closeIcon from "../../../assets/close-icon.png";
import "./SearchBar.css";

export const SearchBar = ({
  handleChange,
  setSearchInput,
  searchInput,
  setLoading,
}) => {
  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder={`${
            window.location.pathname === "/"
              ? "Search Your Movies Here"
              : "Search Mobiles Here"
          }`}
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div
        onClick={() => {
          setSearchInput("");
          setLoading((pre) => (pre = false));
        }}
        className="close-icon"
      >
        {searchInput && <img src={closeIcon} alt="" />}
      </div>
    </div>
  );
};
