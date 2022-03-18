import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
// import dotenv from "dotenv";
// dotenv.config();
export default function Post({ post }) { 
  const PUBLIC_FOLDER = "localhost:4000/assets/images/"
  return (
    <div className="post">
      {post.postBannerFilename && (
        <img className="post-image" src={PUBLIC_FOLDER+post.postBannerFilename} alt="Post image"></img>
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
