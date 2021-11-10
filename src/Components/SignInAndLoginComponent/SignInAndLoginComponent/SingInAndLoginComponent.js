import React, { useState } from "react";

import LogInComponent from "../LogInComponent/LogInComponent";
import SignInComponent from "../SignInComponent/SignInComponent";

import "./SignInAndLogInComponent.css";

function SingInAndLoginComponent() {
  const [ShowComponent, setShowComponent] = useState(false);

  return (
    <div className="SignInAndLogInContainer">
      <div className="MobileShowDiv">
        <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" />
      </div>
      <div>
        {ShowComponent == true ? <SignInComponent /> : <LogInComponent />}
        <div className="Do_Not_Have_account">
          <p>
            {ShowComponent == true ? `I have an account?` : `Don't have an account?`}
            <span onClick={() => (ShowComponent == false ? setShowComponent(true) : setShowComponent(false))}>
              {ShowComponent == true ? "Log In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingInAndLoginComponent;
