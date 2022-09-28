import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg p-3 mb-2 bg-warning text-dark">
      <div className="container-fluid">
        <a className="navbar-brand">CV</a>
        <div className="rightSide">
          <Link to="/" className="navbar-brand fw-bold">Portfolio</Link>
          <Link to="/skills" className="navbar-brand fw-bold">Skills</Link>
          <Link to="/about" className="navbar-brand fw-bold">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
