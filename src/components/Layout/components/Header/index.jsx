import React from "react";
import "./style.scss";
import { Layout } from "antd";
const { Header } = Layout;

function Index() {
  return (
    <Header className="header">
      <div className="left">Left</div>
      <div className="right">Right</div>
    </Header>
  );
}

export default Index;
