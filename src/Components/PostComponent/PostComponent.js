import React from "react";

import CommentsComponent from "../CommentsComponent/CommentsComponent";

import "./PostComponent.css";

function PostComponent({ data, id }) {
  const { Caption, image, username, Place } = data;

  return (
    <div className="Post">
      <div className="PostIconWithContent">
        <div className="UserAvatarDiv">
          <img src="/Images/avatar.jpeg" />
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
      <CommentsComponent targetId={id} />
    </div>
  );
}

export default PostComponent;
