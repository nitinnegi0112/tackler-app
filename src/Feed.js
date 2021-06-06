import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { ...doc.data() };
          })
        );
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        return <Post {...post} key={post.timeStamp} />;
      })}
    </div>
  );
};

export default Feed;
