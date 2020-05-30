import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Directory from "./containers/Directory";
import Directory_ReactTable from "./containers/Directory_React-Table";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="App App-header">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/directory" component={Directory} />
          <Route path="/directory-react-table" component={Directory_ReactTable} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
