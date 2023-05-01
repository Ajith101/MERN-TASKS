import React, { useState } from "react";
import "./AddTodo.css";

export const AddTodo = ({
  inputHandler,
  submitHandler,
  todoText,
  errorValues,
}) => {
  return (
    <>
      <div className="add-todo-container">
        <form className="input-section" onSubmit={submitHandler}>
          <div className="input-box">
            <input
              value={todoText.todo}
              type="text"
              name="todo"
              onChange={inputHandler}
            />
          </div>

          <div className="">
            <button type="submit">ADD TODO</button>
          </div>
        </form>
        {errorValues?.todo && (
          <p style={{ color: "red", margin: "5px 0", textAlign: "left" }}>
            Enter Your Todo
          </p>
        )}
      </div>
    </>
  );
};
