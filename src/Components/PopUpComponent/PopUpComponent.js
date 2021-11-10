import React from "react";

import { auth } from "../Firebase/Firebase.util";

import "./PopUpComponent.css";

const changeAppState = () => {
  auth.signOut();
  window.location.reload();
};

function PopUpComponent({ className }) {
  return (
    <div className={className == false ? "PopUpDiv" : "PopUpDiv ShowPopUp"}>
      <div className="ArrowDiv"></div>
      <p onClick={changeAppState}>Log Out</p>
    </div>
  );
}

export default PopUpComponent;
