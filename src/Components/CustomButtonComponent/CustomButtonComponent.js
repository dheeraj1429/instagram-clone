import React from "react";

import "./CustomButtonComponent.css";

function CustomButtonComponent({ InnerText, onClick, className, bgColor, color, type }) {
  return (
    <button
      type={type ? type : "button"}
      className={className ? `CustomButton ${className}` : null}
      onClick={onClick}
      style={{
        background: bgColor,
        color: color,
      }}
    >
      {InnerText}
    </button>
  );
}

export default CustomButtonComponent;
