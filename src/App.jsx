import React, { useState } from "react";
import "../src/styles/style.css";
import FormOneNew from "./components/FormOneNew";
import ShowTitle from "./components/ShowTitle";

const App = () => {
  if (window.location.pathname === "/show-titl") {
    return <ShowTitle />;
  }
  return (
    <>
      <FormOneNew />
    </>
  );
};

export default App;
