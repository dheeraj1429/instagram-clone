import React, { useState, useEffect } from "react";

import "./UserProfileComponent.css";

function UserProfileComponent({ userProfile, userName, className }) {
  const [UserPic, setUserPic] = useState("");

  useEffect(() => {
    const shortNameFunction = function () {
      if (userProfile !== null) return;

      const [first, second] = userName.split(" ");
      const str = (str) => str[0].toUpperCase() + str.slice(1);
      const properName = `${str(first)}`;
      setUserPic(properName);
    };

    shortNameFunction();
  }, []);

  return (
    <div className="UserDetails">
      <div className={className ? `UserProfile_Div ${className}` : "UserProfile_Div"}>
        {userProfile == null ? <p>{UserPic[0]}</p> : <img src={userProfile} />}
      </div>
      <div className="User_Content">
        <p>{userName}</p>
      </div>
    </div>
  );
}

export default UserProfileComponent;
