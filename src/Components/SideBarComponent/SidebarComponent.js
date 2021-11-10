import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserProfileComponent from "../UserProfileComponent/UserProfileComponent";
import { firestore } from "../Firebase/Firebase.util";

import "./SidebarComponent.css";

function SidebarComponent() {
  const [LoginUsers, setLoginUsers] = useState([]);

  useEffect(() => {
    firestore.collection("users").onSnapshot((snapShot) => {
      setLoginUsers(
        snapShot.docs.map((el) => ({
          id: el.id,
          userCollection: el.data(),
        }))
      );
    });
  }, []);

  const selector = useSelector((state) => state.user.userData);

  const { photoURL, displayName } = selector;

  return (
    <div className="SideBar">
      <UserProfileComponent userProfile={photoURL} userName={displayName} className={"CurrentUser"} />

      <div className="OtherUser">
        <p className="Suggesstion">Suggestions For You</p>
      </div>

      {LoginUsers.map((el) => (
        <UserProfileComponent userProfile={el.userCollection.photoURL} userName={el.userCollection.displayName} className={"joinPeoples"} />
      ))}
    </div>
  );
}

export default SidebarComponent;
