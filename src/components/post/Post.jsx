import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PUBLIC_FOLDER = "localhost:4000/assets/images"
  return (
    <div className="post">
      {post.photoUrl && (
        <img className="post-image" src={PUBLIC_FOLDER+post.photoUrl} alt="Post image"></img>
      )}
      <div className="post-info">
        <div className="post-categories">
          {post.categories.map((category) => (
            <span className="post-category">.name</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <div className="post-title">{post.title}</div>
        </Link>
        <div className="post-timestamp">
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <p className="post-description">{post.description}</p>
    </div>
  );
}
