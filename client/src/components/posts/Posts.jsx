import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {console.log("dfd: " + posts)}
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
