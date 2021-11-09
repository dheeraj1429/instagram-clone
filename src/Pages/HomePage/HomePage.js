import React, { useEffect, useState } from "react";
import PostComponent from "../../Components/PostComponent/PostComponent";

import { firestore } from "../../Components/Firebase/Firebase.util";
import SidebarComponent from "../../Components/SideBarComponent/SidebarComponent";

import "./HomePage.css";

function HomePage() {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    firestore.collection("posts").onSnapshot((snapShot) => {
      setPost(
        snapShot.docs.map((el) => ({
          id: el.id,
          data: el.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="HomePage">
      <div className="Container">
        <div className="PostDivContainer">
          <div>
            {Post.map(({ id, ...otherProps }) => (
              <PostComponent key={id} {...otherProps} id={id} />
            ))}
          </div>
          <div className="SideBarDiv">
            <SidebarComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
