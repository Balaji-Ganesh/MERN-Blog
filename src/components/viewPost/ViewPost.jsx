import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./viewPost.css";
import Context from "../../context/Context";

export default function ViewPost() {
  const location = useLocation(); // to know the path (by -self..!!)
  //console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  /// for updation of details in the post, after retrieval from server..
  const [post, setPost] = useState({});

  // for showing option of editing.. if its the author who is viewing -> Allow, else not.
  const { userCredentials } = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const retrievedPost = await axios.get("/posts/" + postId);
      setPost(retrievedPost.data);
      console.log(retrievedPost.data);
    };

    // make a call..
    fetchPost();
  }, [postId]); // this is must, else going into loop..

  /* various helping handlers....*/
  const handlePostEdit = async (evnt) => {};

  const handlePostDelete = async (evnt) => {
    try {
      await axios.delete(`/posts/${postId}`, {
        data: { username: userCredentials.data.username },
      });
      //navigate to home page..
      window.location.replace("/");
    } catch (error) {
      console.error("[ERROR] Post deletion error");
    }
  };

  // main location of photos..
  const PUBLIC_FOLDER = "http://localhost:4000/assets/images/";
  console.info("[INFO] post banner: ", post.postBannerFilename);
  return (
    <div className="viewPost">
      <div className="postInfo">
        {post.postBannerFilename && (
          <img
            src={PUBLIC_FOLDER + post.postBannerFilename}
            alt="View post image"
            className="viewPost-image"
          />
        )}
        <div className="postTitle">
          {post.title}
          {/** Only if its the author who is viewing, allow these options.. "?" is used to handle, when no user is logged in. i.e., even without login, can view posts, but can't edit*/}
          {post.username === userCredentials?.data.username && (
            <div className="postEdit">
              <i
                className="postEdit-icon fa-solid fa-pen-to-square"
                onClick={handlePostEdit}
              ></i>
              <i
                className="postEdit-icon fa-solid fa-trash-can"
                onClick={handlePostDelete}
              ></i>
            </div>
          )}
        </div>
        <div className="postMetaInfo">
          <div className="postAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
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
