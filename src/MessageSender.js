import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db,{auth} from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import moment from 'moment';
const MessageSender = () => {
  const [user]= useAuthState(auth);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').doc().set({
      input,
      imageUrl,
      senderImg : user?.photoURL,
      sender: user?.displayName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      createdAt: moment().format('LLL'),
    })
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind ?`}
          />

          <input
            className="messageSender__input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCallIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
