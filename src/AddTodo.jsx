import React, { Component } from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";

class AddTodoForm extends Component {
  handleAdd = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const newTodo = { title: values.title, completed: false };
        this.props.handleAdd(newTodo);
        this.props.form.resetFields();
      }
    });
  };
  render() {
    return (
      <Form layout="inline" className="AddTodoForm" onSubmit={this.handleAdd}>
        <Form.Item>
          {this.props.form.getFieldDecorator("title", {
            initialValue: "",
            rules: [
              {
                required: true,
                whitespace: true
              }
            ]
          })(
            <Input
              className="AddTodoInput"
              placeholder="What needs to be done"
            />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(AddTodoForm);
