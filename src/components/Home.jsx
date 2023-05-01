import React, { useState } from "react";
import "./Home.css";
import { AddTodo } from "./addTodo/AddTodo";
import { TodoList } from "./todoLists/TodoList";
import { EditeTodo } from "./editeTodo/EditeTodo";

export const Home = () => {
  const [formValue, setFormValue] = useState([]);
  const [todoText, setTodoText] = useState({ todo: "", isComplete: false });
  const [errorValues, setErrorValues] = useState({ todo: false });
  const [editeTodoss, setEditeTodoss] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (todoText.todo === "") {
      setErrorValues((pre) => ({ ...pre, todo: true }));
      return;
    }
    setFormValue([...formValue, todoText]);
    setTodoText({ ...todoText, todo: "" });
  };
  const inputHandler = (event) => {
    setTodoText({ ...todoText, todo: event.target.value });
    let error = false;
    if (event.target.value === "") {
      error = true;
    }
    setErrorValues((pre) => ({ ...pre, todo: error }));
  };
  const deleteTodo = (id) => {
    setFormValue((pre) => [...pre.filter((item, ids) => id !== ids)]);
  };
  const checkTrue = (id) => {
    const newList = [...formValue];
    const latestResults = newList.map((item, ids) =>
      ids === id ? { ...item, isComplete: true } : item
    );
    setFormValue(latestResults);
  };
  const editeTodos = (id) => {
    setEditeTodoss(id);
  };
  const displayTodos = formValue?.map((item, id) => {
    return (
      <TodoList
        editeTodos={editeTodos}
        deleteTodo={deleteTodo}
        item={item}
        key={id}
        id={id}
        checkTrue={checkTrue}
        isTrue={id === editeTodoss}
        formValue={formValue}
        setFormValue={setFormValue}
      />
    );
  });

  return (
    <>
      <div className="bg-box"> </div>
      <div className="home-container">
        <h1>Todo list</h1>
        <AddTodo
          submitHandler={submitHandler}
          inputHandler={inputHandler}
          todoText={todoText}
          errorValues={errorValues}
        />

        {displayTodos}
      </div>
    </>
  );
};
