import React, { useState } from "react";
import Counter from "./components/Counter";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count !== 10) {
      setCount((pre) => pre + 1);
    }
  };
  const decrement = () => {
    if (count !== 0) {
      setCount((pre) => pre - 1);
    }
  };

  return (
    <div className="main">
      <Counter increment={increment} decrement={decrement} count={count} />
    </div>
  );
};

export default App;
