import React from "react";
import "./SearchList.css";
import movieIcon from "../../../assets/movie.png";

export const SearchList = ({ item }) => {
  return (
    <div className="search-list-cards">
      <img
        src={`${
          window.location.pathname === "/local"
            ? item.backdrop_path
            : item.backdrop_path === null
            ? movieIcon
            : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }`}
        // src={`${
        //   item.backdrop_path === null
        //     ? movieIcon
        //     : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        // }`}
        alt=""
      />
      <h2>{item.original_title}</h2>
    </div>
  );
};
