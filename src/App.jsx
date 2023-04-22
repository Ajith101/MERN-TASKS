import React, { useEffect, useState } from "react";
import Accordion from "./components/FAQ/Accordion";
import UserList from "./components/API/UserList";
import "./App.css";
import axios from "axios";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  if (window.location.pathname === "/accordion") {
    return <Accordion />;
  } else if (window.location.pathname === "/user-list") {
    return <UserList />;
  } else if (window.location.pathname === "/carousel") {
    return <Carousel />;
  }

  return (
    <>
      <div className="header"></div>
      <div className="home">
        <a className="button-85" href="/accordion">
          accordion
        </a>
        <a className="button-85" href="/user-list">
          UserList
        </a>
        <a className="button-85" href="/carousel">
          Carousel
        </a>
      </div>
    </>
  );
};

export default App;
