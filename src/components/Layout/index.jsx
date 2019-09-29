import React from "react";
import "./style.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";

const { Content } = Layout;

function Component({ children }) {
  const renderContent = () => {
    return <Content>{children}</Content>;
  };

  return (
    <Layout className="layout-wrapper">
      <Sider />
      <Layout className="main">
        <Header />
        {renderContent()}
      </Layout>
    </Layout>
  );
}

export default Component;
