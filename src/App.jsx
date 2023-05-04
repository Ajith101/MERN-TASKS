import React from "react";
import { Search } from "./components/search/Search";
import { LocalSearch } from "./components/localSearch/LocalSearch";

const App = () => {
  if (window.location.pathname === "/local") {
    return <LocalSearch />;
  }
  return (
    <>
      <Search />
    </>
  );
};

export default App;
