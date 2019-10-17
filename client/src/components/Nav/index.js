import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
                     M I L A
      </a>
      <a href="/user" className="navbar-text ml-auto"> View User Dash/  </a>
      <a href="/admin" className="navbar-text ">  View Admin Dash </a>
    
    </nav>
  );
}

export default Nav;
