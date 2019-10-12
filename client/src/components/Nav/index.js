import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Mila Captions App
      </a>
      <a href="/user" className="navbar-text"> View User Dash </a>
      <a href="/admin" className="navbar-text"> View Admin Dash </a>
    
    </nav>
  );
}

export default Nav;
