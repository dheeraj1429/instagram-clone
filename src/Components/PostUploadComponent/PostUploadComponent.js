import React, { useState } from "react";
import ReactDom from "react-dom";

import { hideAndShowModel } from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";

import { storage, firestore } from "../Firebase/Firebase.util";

import "./PostUploadComponent.css";

function PostUploadComponent() {
  const selector = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [ImageSelect, setImageSelect] = useState(null);
  const [CaptionContent, setCaptionContent] = useState("");

  const { displayName, photoURL } = selector;

  const selectImageHandler = (e) => {
    setImageSelect(e.target.files);
  };

  const changeValueHandler = (e) => {
    setCaptionContent(e.target.value);
  };

  const SelectDataHandler = () => {
    const updateTask = storage.ref(`images/${ImageSelect[0].name}`).put(ImageSelect[0]);
    updateTask.on("state_changed", () => {
      storage
        .ref("images")
        .child(ImageSelect[0].name)
        .getDownloadURL()
        .then((res) => {
          firestore.collection("posts").add({
            Caption: CaptionContent,
            image: res,
            username: displayName,
            userProfile: photoURL,
          });
        });
    });
  };

  return ReactDom.createPortal(
    <div className="uploadPostModel">
      <div className="Model__Inner">
        <div className="Close_PopUp">
          <i class="fas fa-times" onClick={() => dispatch(hideAndShowModel(false))}></i>
        </div>

        <div className="Model_Content">
          <img src="data:image/svg+xml,%3Csvg%20aria-label%3D%22Icon%20to%20represent%20media%20such%20as%20images%20or%20videos%22%20class%3D%22_8-yf5%20%22%20color%3D%22%23262626%22%20fill%3D%22%23262626%22%20height%3D%2277%22%20role%3D%22img%22%20viewBox%3D%220%200%2097.6%2077.3%22%20width%3D%2296%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M16.3%2024h.3c2.8-.2%204.9-2.6%204.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9%202.6-4.8%205.4c.1%202.7%202.4%204.8%205.1%204.8zm-2.4-7.2c.5-.6%201.3-1%202.1-1h.2c1.7%200%203.1%201.4%203.1%203.1%200%201.7-1.4%203.1-3.1%203.1-1.7%200-3.1-1.4-3.1-3.1%200-.8.3-1.5.8-2.1z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M84.7%2018.4L58%2016.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9%206c-5.7.3-10.1%205.3-9.8%2011L5%2051v.8c.7%205.2%205.1%209.1%2010.3%209.1h.6l21.7-1.2v.6c-.3%205.7%204%2010.7%209.8%2011l34%202h.6c5.5%200%2010.1-4.3%2010.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2%2010.8C8.7%209.1%2010.8%208.1%2013%208l34-1.9c4.6-.3%208.6%203.3%208.9%207.9l.2%202.8-5.3-.3c-5.7-.3-10.7%204-11%209.8l-.6%209.5-9.5%2010.7c-.2.3-.6.4-1%20.5-.4%200-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7%2049%205.2%2017c-.2-2.3.6-4.5%202-6.2zm8.7%2048c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4%201-.5.4%200%20.7.1%201%20.4l7.8%207c.7.6%201.6.9%202.5.9.9%200%201.7-.5%202.3-1.1l7.8-8.8-1.1%2018.6-21.9%201.1zm76.5-29.5l-2%2034c-.3%204.6-4.3%208.2-8.9%207.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4%203.9-7.9%208.4-7.9h.5l34%202c4.7.3%208.2%204.3%207.9%208.9z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M78.2%2041.6L61.3%2030.5c-2.1-1.4-4.9-.8-6.2%201.3-.4.7-.7%201.4-.7%202.2l-1.2%2020.1c-.1%202.5%201.7%204.6%204.2%204.8h.3c.7%200%201.4-.2%202-.5l18-9c2.2-1.1%203.1-3.8%202-6-.4-.7-.9-1.3-1.5-1.8zm-1.4%206l-18%209c-.4.2-.8.3-1.3.3-.4%200-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7%201.4-2.1.8-.4%201.7-.3%202.5.1L77%2043.3c1.2.8%201.5%202.3.7%203.4-.2.4-.5.7-.9.9z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />

          <p>Select photos</p>
          <input type="text" placeholder="Disruption" className="disruption" value={CaptionContent} onChange={changeValueHandler} />

          <div>
            <input type="file" onChange={selectImageHandler} />

            <button type="button" className="selectButton" onClick={SelectDataHandler}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("Portal_div")
  );
}

export default PostUploadComponent;
