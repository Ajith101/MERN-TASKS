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
          <input
            value={todoText.todo}
            type="text"
            name="todo"
            onChange={inputHandler}
          />
          <button type="submit">ADD TODO</button>
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
