import React from "react";
import "./TodoList.css";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { EditeTodo } from "../editeTodo/EditeTodo";

export const TodoList = ({
  item,
  checkTrue,
  id,
  deleteTodo,
  editeTodos,
  isTrue,
  formValue,
  setFormValue,
}) => {
  return (
    <>
      {isTrue ? (
        <EditeTodo
          editeTodos={editeTodos}
          item={item}
          id={id}
          formValue={formValue}
          setFormValue={setFormValue}
        />
      ) : (
        <div className="todo-list-container">
          <p
            onClick={() => checkTrue(id)}
            style={{
              textDecorationLine: `${
                item.isComplete ? "none" : "line-through"
              }`,
            }}
          >
            {item.todo}
          </p>
          <div className="todo-list-icons">
            <FaPencilAlt onClick={() => editeTodos(id)} size={"24px"} />
            <AiFillDelete onClick={() => deleteTodo(id)} size={"24px"} />
          </div>
        </div>
      )}
    </>
  );
};
