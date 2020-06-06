import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NavBar from "./components/NavBar/NavBar";

// containers
import Home from "./containers/Home";
import Directory from "./containers/Directory";

// styling
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="App App-header">
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
