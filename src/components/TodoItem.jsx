import React from "react";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo, onTodoCompleted, onTodoRemove }) => {
  const { id, title, completed } = todo;

  return (
    <div className={`todo__item ${completed ? "completed" : ""}`}>
      <button className="todo__completed" onClick={() => onTodoCompleted(id)}>
        {completed ? <BsFillCheckCircleFill /> : <BsCircle />}
      </button>
      <p className="todo__title">{title}</p>
      <button className="todo__remove" onClick={() => onTodoRemove(id)}>
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoItem;
