import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Signin from "@/pages/Signin";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
