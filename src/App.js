import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Directory from "./containers/Directory";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/directory" component={Directory} />
      </div>
    </Router>
  );
}

export default App;
