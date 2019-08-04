import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import TodoApp from "./Todo";
import "./styles.css";

function App() {
  return (
    <Row className="App">
      <Col
        xs={{ span: 24 }}
        sm={{ span: 14, offset: 3 }}
        xl={{ span: 8, offset: 8 }}
      >
        <h1>Todo App with React Hooks</h1>
        <TodoApp />
      </Col>
    </Row>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
