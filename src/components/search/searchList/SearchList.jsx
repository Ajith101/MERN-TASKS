import React from "react";
import "./SearchList.css";
import just from "../../../assets/just.jpg";

export const SearchList = () => {
  return (
    <div className="search-list-container">
      <div className="search-list-cards">
        <img src={just} alt="" />
        <h2>Name Of Movie</h2>
      </div>
      <div className="search-list-cards">
        <img src={just} alt="" />
        <h2>Name Of Movie</h2>
      </div>
      <div className="search-list-cards">
        <img src={just} alt="" />
        <h2>Name Of Movie</h2>
      </div>
      <div className="search-list-cards">
        <img src={just} alt="" />
        <h2>Name Of Movie</h2>
      </div>
    </div>
  );
};
