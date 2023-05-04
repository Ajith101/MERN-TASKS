import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="search-header">
      <a href={`${window.location.pathname === "/local" ? "/" : "/local"}`}>
        <button className="sear-header-local">
          Movies Api {window.location.pathname === "/" ? <span></span> : null}
        </button>
      </a>
      <a href={`${window.location.pathname === "/local" ? "/" : "/local"}`}>
        <button className="sear-header-local">
          Local Search
          {window.location.pathname === "/local" ? <span></span> : null}
        </button>
      </a>
    </div>
  );
};
