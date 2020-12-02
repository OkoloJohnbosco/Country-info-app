import React from "react";
import "./Button.css";

function Button({ clicked, children }) {
  return (
    <button onClick={clicked} className="button">
      {children}
    </button>
  );
}

export default Button;
