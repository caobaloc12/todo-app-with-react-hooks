import React from "react";
import TodoItem from "./TodoItem";
import "./styles.css";

const TodoList = ({ list, onCheck, onSave, onDelete }) => (
  <ul className="TodoList">
    {list.map(td => (
      <TodoItem
        key={td.key}
        title={td.title}
        completed={td.completed}
        onCheck={e => onCheck(td.key, e.target.checked)}
        onSave={title => onSave(td.key, title)}
        onDelete={() => onDelete(td.key)}
      />
    ))}
  </ul>
);

export default TodoList;
