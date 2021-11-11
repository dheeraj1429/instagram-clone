import React from "react";

import "./UserProfileComponent.css";

function UserProfileComponent({ userProfile, userName, className }) {
  return (
    <div className="UserDetails">
      <div className={className ? `UserProfile_Div ${className}` : "UserProfile_Div"}>
        <img
          src={
            userProfile == null
              ? "https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              : userProfile
          }
        />
      </div>
      <div className="User_Content">
        <p>{userName}</p>
      </div>
    </div>
  );
}

export default UserProfileComponent;
