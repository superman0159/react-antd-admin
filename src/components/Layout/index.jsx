import React from "react";
import { Layout, Header, Content, Footer } from "antd";

function Component({ children }) {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

Component.propTypes = {};

export default Component;
