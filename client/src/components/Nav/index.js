import React from "react";
import { Link } from "react-router-dom";



function Nav() {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container-fluid">
      <div className="navbar-header">
      <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
      <button type="button" className="btn btn-warning">Google Book Search</button>
        </Link>
        
      </div>
      <ul className="nav navbar-nav">
        <li className="active"></li>
         <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <a className="btn btn-warning" role="button">Search</a>
         </Link>
         <Link to="/Saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
        <a className="btn btn-warning" role="button">Saved</a>
         </Link>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link type="button" className="btn btn-warning" to="/">Google Book Search</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"></li>
        <Link  className="btn btn-warning" role="button" to="/">Search</Link>
        <Link to="/"  className={window.location.pathname === "/" || window.location.pathname === "/search" ? "btn btn-warning" :"button"}>Saved</Link>
      </ul>

    </div>
  </nav> */}
