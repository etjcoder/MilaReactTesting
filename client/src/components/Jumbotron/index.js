import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "white", height: 200, clear: "both", paddingTop: 60, textAlign: "center", opacity: 0.8 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
