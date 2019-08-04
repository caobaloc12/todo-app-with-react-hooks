import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

class EditTodoForm extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }
  handleEdit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSave(values.title);
      }
    });
  };
  render() {
    return (
      <Form layout="inline" className="EditTodoForm" onSubmit={this.handleEdit}>
        <Form.Item>
          {this.props.form.getFieldDecorator("title", {
            initialValue: this.props.title,
            rules: [
              {
                required: true,
                whitespace: true
              }
            ]
          })(
            <Input
              ref={el => {
                this.input = el;
              }}
              className="EditTodoInput"
              placeholder="What needs to be done"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            size="small"
            type="primary"
            style={{ marginRight: 4 }}
          >
            Save
          </Button>
          <Button size="small" onClick={this.props.onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(EditTodoForm);
