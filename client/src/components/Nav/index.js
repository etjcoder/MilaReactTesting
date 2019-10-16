import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        MILA
      </a>
      <a href="/user" className="navbar-text"> View User Dash </a>
      <a href="/admin" className="navbar-text"> View Admin Dash </a>
    
    </nav>
  );
}

export default Nav;
