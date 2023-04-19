import React from "react";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
