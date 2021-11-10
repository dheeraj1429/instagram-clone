import React, { useState } from "react";

import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import { auth, signInWithGoogle } from "../../Firebase/Firebase.util";

import "./LogInComponent.css";

function LogInComponent() {
  const [UserInputData, setUserInputData] = useState({
    email: "",
    password: "",
  });

  const ChangeUserInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setUserInputData({ ...UserInputData, [name]: value });
  };

  const { email, password } = UserInputData;

  const SetUserHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      auth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err));
    }
  };

  return (
    <div className="LogIn__Container">
      <div className="Login__InnerDiv">
        <div className="CenterDiv">
          <div className="ImageLogDiv">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
          </div>
          <form method="POST">
            <input type="email" placeholder="email" name="email" value={UserInputData.email} onChange={ChangeUserInputValue} />
            <input type="password" placeholder="password" value={UserInputData.password} name="password" onChange={ChangeUserInputValue} />
            <CustomButtonComponent
              type={"submit"}
              InnerText={"Log In"}
              className={"LogInButton"}
              bgColor={"#0095f6"}
              color={"#fff"}
              onClick={SetUserHandler}
            />
          </form>
          <div>
            <div className="Divider">
              <div className="DividerDiv"></div>
              <div>
                <p>OR</p>
              </div>
              <div className="DividerDiv"></div>
            </div>

            <CustomButtonComponent
              InnerText={"Sign in with Google"}
              onClick={signInWithGoogle}
              className={"SignInWithGoogleBtn"}
              bgColor={"#7ab3e7"}
              color={"#fff"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;
