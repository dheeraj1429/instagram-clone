import React, { useState } from "react";
import CustomButtonComponent from "../../CustomButtonComponent/CustomButtonComponent";

import { auth } from "../../Firebase/Firebase.util";

import "./SignInComponent.css";

function SignInComponent() {
  const [UserInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const ChangeUserInfoHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserInfo({ ...UserInfo, [name]: value });
  };

  const { name, username, email, password } = UserInfo;

  const SetUserDataHandler = (e) => {
    e.preventDefault();

    if (name && username && email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="SignIn_Container">
      <div className="ImageLogDiv">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
      </div>

      <form method="POST">
        <input type="text" placeholder="Full Name" name="name" value={UserInfo.name} onChange={ChangeUserInfoHandler} />
        <input type="text" placeholder="username" name="username" value={UserInfo.username} onChange={ChangeUserInfoHandler} />
        <input type="email" placeholder="email" name="email" value={UserInfo.email} onChange={ChangeUserInfoHandler} />
        <input type="password" placeholder="password" name="password" value={UserInfo.password} onChange={ChangeUserInfoHandler} />
        <CustomButtonComponent
          type={"submit"}
          InnerText={"Sign Up"}
          className={"SignUpButton"}
          bgColor={"#0095f6"}
          color={"#fff"}
          onClick={SetUserDataHandler}
        />
      </form>
    </div>
  );
}

export default SignInComponent;
