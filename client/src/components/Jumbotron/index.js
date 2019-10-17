import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "white", height: 200, clear: "both", paddingTop: 60, textAlign: "right", opacity: 0.7 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
