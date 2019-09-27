import React from "react";
import "./App.scss";
import { Button } from "antd";
import Signin from "@/pages/Signin";

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Signin />
    </div>
  );
}

export default App;
