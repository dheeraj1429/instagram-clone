import React from "react";

import "./UserProfileComponent.css";

function UserProfileComponent({ userProfile, userName, className }) {
  return (
    <div className="UserDetails">
      <div className={className ? `UserProfile_Div ${className}` : "UserProfile_Div"}>
        <img src={userProfile} />
      </div>
      <div className="User_Content">
        <h3>'dee_art_3d'</h3>
        <p>{userName}</p>
      </div>
    </div>
  );
}

export default UserProfileComponent;
