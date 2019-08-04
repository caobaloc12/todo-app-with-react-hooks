import React, { useState } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const defaultList = [
  { key: "0", title: "Learning React Hooks", completed: false },
  { key: "1", title: "Learning Nextjs", completed: false }
];

const Todo = () => {
  const [todos, setTodos] = useState([...defaultList]);
  const checkExisting = (key, title) => {
    const findExist = todos.filter(
      td => td.key !== key && td.title.toLowerCase() === title.toLowerCase()
    );
    if (findExist.length > 0) {
      notification.error({
        message: "Error",
        description: `${title} already exists.`
      });
      return true;
    }
    return false;
  };
  const handleAdd = values => {
    const key = `${todos.length}`;
    const newTodo = { ...values, key };
    const isExist = checkExisting(key, values.title);
    if (!isExist) {
      setTodos([...todos, newTodo]);
    }
  };
  const handleCheck = (key, checked) => {
    const newTodos = todos.map(td => ({
      ...td,
      completed: td.key === key ? checked : td.completed
    }));
    setTodos([...newTodos]);
  };
  const handleSave = (key, title) => {
    const isExist = checkExisting(key, title);
    if (!isExist) {
      const newTodos = todos.map(td => ({
        ...td,
        title: td.key === key ? title : td.title
      }));
      setTodos([...newTodos]);
    }
  };

  const handleDelete = key => {
    const newTodos = todos.filter(td => td.key !== key);
    setTodos([...newTodos]);
  };

  return (
    <div className="Todo">
      <AddTodo handleAdd={handleAdd} />
      <TodoList
        list={todos}
        onCheck={handleCheck}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
