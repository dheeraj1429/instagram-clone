import React from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import { signInWithGoogle } from "../../Firebase/Firebase.util";

import "./LogInComponent.css";

function LogInComponent() {
  return (
    <div className="LogIn__Container">
      <div className="Login__InnerDiv">
        <div className="CenterDiv">
          <div className="ImageLogDiv">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
          </div>
          <div>
            <CustomButtonComponent InnerText={"Sign in with Google"} onClick={signInWithGoogle} className={"SignInWithGoogleBtn"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;
