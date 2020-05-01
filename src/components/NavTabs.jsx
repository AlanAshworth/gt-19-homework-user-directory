import React from "react";

const NavTabs = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="/home">Home</a>
    //     <a className="navbar-brand" href="/details">Details</a>
    //     <form className="form-inline">
    //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form>
    // </nav>
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/home">
        Home
      </a>
      <a className="navbar-brand left" href="/directory">
        Directory
      </a>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavTabs;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// function NavTabs() {
//   const location = useLocation();
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/directory" className={location.pathname === "/directory" ? "nav-link active" : "nav-link"}>
//           Directory
//         </Link>
//       </li>
//     </ul>
//   );
// }
// export default NavTabs;