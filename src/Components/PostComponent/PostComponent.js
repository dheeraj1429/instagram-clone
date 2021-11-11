import React from "react";

import CommentsComponent from "../CommentsComponent/CommentsComponent";
import { useSelector } from "react-redux";

import "./PostComponent.css";

function PostComponent({ data, id }) {
  const selector = useSelector((state) => state.user.userData);
  const { Caption, image, username, Place } = data;
  const { photoURL } = selector;

  return (
    <div className="Post">
      <div className="PostIconWithContent">
        <div className="UserAvatarDiv">
          {photoURL == null ? (
            <img src="https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
          ) : (
            <img src={photoURL} />
          )}
        </div>
        <div className="userContent">
          <h3>{username}</h3>
          {Place ? <p>{Place}</p> : null}
        </div>
      </div>

      <div className="PostImgDiv">
        <img src={image} />
      </div>

      <div className="PostCaption">
        <p>{Caption}</p>
      </div>

      {/* Comments Div */}
      <CommentsComponent user={username} targetId={id} />
    </div>
  );
}

export default PostComponent;
