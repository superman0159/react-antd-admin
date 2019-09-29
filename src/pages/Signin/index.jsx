import React from "react";
import "./style.scss";
import { Layout } from "antd";
import SigninForm from "./components/SignForm";

const { Footer, Content } = Layout;

function Index() {
  return (
    <Layout className="signin-wrapper">
      <Content className="content">
        <span className="title">Ant Design Admin</span>
        <SigninForm />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Index;
