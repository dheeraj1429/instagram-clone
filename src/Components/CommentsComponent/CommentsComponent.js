import React, { useEffect, useState } from "react";

import { firestore } from "../Firebase/Firebase.util";
import { useSelector } from "react-redux";

import "./CommentsComponent.css";

function CommentsComponent({ targetId, user }) {
  const [Comment, setComment] = useState([]);
  const [Massage, setMassage] = useState();
  const selector = useSelector((state) => state.user.userData);

  const { displayName } = selector;

  const MassageHandler = (e) => {
    setMassage(e.target.value);
  };

  const PostCommentHandler = function () {
    if (Massage.length > 1) {
      firestore.collection("posts").doc(targetId).collection("Comments").add({
        Comment: Massage,
        user: displayName,
      });

      setMassage("");
    }
  };

  useEffect(() => {
    firestore
      .collection("posts")
      .doc(targetId)
      .collection("Comments")
      .onSnapshot((snapShot) => {
        setComment(snapShot.docs.map((msg) => msg.data()));
      });
  }, []);

  return (
    <div>
      <div className="Comments">
        {Comment
          ? Comment.map((el) => (
              <div className="UserComments">
                <h3>{el.user}</h3>
                <p>{el.Comment}</p>
              </div>
            ))
          : null}
      </div>
      <div className="CommentsDiv">
        <div className="Comment__Div__Input">
          <div className="Comment__Icon_Div">
            <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
            </svg>
          </div>
          <input type="text" placeholder="Add a comment" name="text" value={Massage} onChange={MassageHandler} />
          <div className="PostYourComment">
            <p onClick={PostCommentHandler}>Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsComponent;
