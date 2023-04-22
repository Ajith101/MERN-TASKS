import React, { useState } from "react";
import showIcon from "./../../assets/show.png";

const Cards = ({ item, toogleBTN, isActive }) => {
  const { title, decription } = item;

  return (
    <>
      <div className="">
        <div className="accordion">
          <span onClick={() => toogleBTN()} className="titles">
            {title}
          </span>
          <img
            onClick={() => toogleBTN()}
            className={`${isActive && "open"}`}
            src={showIcon}
            alt=""
          />
        </div>
        {isActive === true && <div className="show-menu">{decription}</div>}
      </div>{" "}
    </>
  );
};

export default Cards;
