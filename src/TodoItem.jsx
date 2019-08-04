import React, { useState } from "react";
import { Checkbox, Button, Icon, Popconfirm, Tooltip } from "antd";
import "antd/dist/antd.css";
import EditTodo from "./EditTodo";

export default ({ title, completed, onCheck, onSave, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleSave = title => {
    setIsEdit(false);
    onSave(title);
  };

  return isEdit ? (
    <EditTodo
      title={title}
      onSave={handleSave}
      onCancel={() => setIsEdit(false)}
    />
  ) : (
    <li
      className="TodoItem"
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <Checkbox onChange={onCheck}>
        <span className={completed ? "TodoItemCompleted" : ""}>{title}</span>
      </Checkbox>
      {showIcon && !completed && (
        <Tooltip title="Edit">
          <Button type="link" size="small" onClick={() => setIsEdit(true)}>
            <Icon type="edit" className="IconColor" />
          </Button>
        </Tooltip>
      )}
      {completed && (
        <Popconfirm
          title="Are you sure you want to delete?"
          okText="Yes"
          okType="danger"
          cancelText="No"
          onConfirm={onDelete}
        >
          <Tooltip title="Delete">
            <Button type="link" size="small">
              <Icon type="delete" className="IconColor" />
            </Button>
          </Tooltip>
        </Popconfirm>
      )}
    </li>
  );
};
