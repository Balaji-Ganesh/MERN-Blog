import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./viewPost.css";

export default function ViewPost() {
  const location = useLocation(); // to know the path (by -self..!!)
  //console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  /// for updation of details in the post, after retrieval from server..
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const retrievedPost = await axios.get("/posts/" + postId);
      setPost(retrievedPost.data);
      console.log(retrievedPost.data);
    };

    // make a call..
    fetchPost();
  }, [postId]); // this is must, else going into loop..

  return (
    <div className="viewPost">
      <div className="postInfo">
        {post.photoUrl && (
          <img
            src={post.photoUrl}
            alt="View post image"
            className="viewPost-image"
          />
        )}
        <div className="postTitle">
          {post.title}
          <div className="postEdit">
            <i className="postEdit-icon fa-solid fa-pen-to-square"></i>
            <i className="postEdit-icon fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div className="postMetaInfo">
          <div className="postAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className = "link">
              <b>{post.username}</b>
            </Link>
          </div>
          <div className="postTimeStamp">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
      </div>
      <div className="postContent">
        <p>{post.description}</p>
      </div>
    </div>
  );
}
