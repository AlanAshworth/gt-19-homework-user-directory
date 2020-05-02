import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={logo} alt="logo"></img>
        </div>
      </div>

      <div className="row App">
        <div className="col">
          <span>
            <h1>Welcome to Employee Tracker!</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
