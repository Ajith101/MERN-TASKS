import React, { useState } from "react";
import "./EditeTodo.css";

export const EditeTodo = ({
  editeTodos,
  item,
  id,
  formValue,
  setFormValue,
}) => {
  const [todoForms, setTodoForms] = useState({ todo: item.todo });
  const inputHandler = (event) => {
    const { value } = event.target;
    setTodoForms({ ...todoForms, todo: value });
  };

  // console.log(formValue);
  const submitEdite = () => {
    const newValues = [...formValue];
    setFormValue(
      newValues.map((item, ids) =>
        id === ids ? { ...item, todo: todoForms.todo === item.todo } : item
      )
    );
    editeTodos("");
  };

  return (
    <div className="edite-todo-container">
      <input
        type="text"
        placeholder="edite"
        value={todoForms.todo}
        onChange={inputHandler}
      />
      <div className="edite-todo-actions">
        <button onClick={() => submitEdite()} className="save">
          Save
        </button>
        <button onClick={() => editeTodos("")} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};
