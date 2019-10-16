import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "white", height: 300, clear: "both", paddingTop: 120, textAlign: "center", opacity: 0.8 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
