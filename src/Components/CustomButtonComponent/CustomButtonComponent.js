import React from "react";

import "./CustomButtonComponent.css";

function CustomButtonComponent({ InnerText, onClick, className }) {
  return (
    <button type="button" className={className ? `CustomButton ${className}` : null} onClick={onClick}>
      {InnerText}
    </button>
  );
}

export default CustomButtonComponent;
