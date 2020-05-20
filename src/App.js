import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Directory from "./containers/Directory";
// import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/directory" component={Directory} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
