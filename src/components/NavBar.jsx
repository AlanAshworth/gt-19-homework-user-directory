import React from "react";
import logo from "../logo.svg";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img className="App-logo" src={logo} alt="logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/directory">
              Directory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/directory-react-table">
              Directory (w/ react-table)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
