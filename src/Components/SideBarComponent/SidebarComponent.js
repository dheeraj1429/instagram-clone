import React from "react";

import { useSelector } from "react-redux";
import UserProfileComponent from "../UserProfileComponent/UserProfileComponent";

import "./SidebarComponent.css";

function SidebarComponent() {
  const selector = useSelector((state) => state.user.userData);

  const { photoURL, displayName } = selector;

  return (
    <div className="SideBar">
      <UserProfileComponent userProfile={photoURL} userName={displayName} className={"CurrentUser"} />

      <div className="OtherUser">
        <p className="Suggesstion">Suggestions For You</p>
      </div>
    </div>
  );
}

export default SidebarComponent;
