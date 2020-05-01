import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/directory" className={location.pathname === "/directory" ? "nav-link active" : "nav-link"}>
          Directory
        </Link>
      </li>
    </ul>
  );
}
export default NavTabs;