import React, { useState } from "react";
import SearchIcon from "../../../assets/search-icon.png";
import closeIcon from "../../../assets/close-icon.png";
import "./SearchBar.css";

export const SearchBar = ({ handleChange }) => {
  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <img src={SearchIcon} alt="" />{" "}
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      <div className="close-icon">
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
};
