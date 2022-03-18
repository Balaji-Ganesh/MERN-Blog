import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Link } from "react-router-dom";
import "./viewPost.css";
import Context from "../../context/Context";
// import dotenv from "dotenv";
// dotenv.config();
// process.env.PUBLIC_FOLDER;

export default function ViewPost() {
  const location = useLocation(); // to know the path (by -self..!!)
  //console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  /// for updation of details in the post, after retrieval from server..
  const [post, setPost] = useState({});

  // for showing option of editing.. if its the author who is viewing -> Allow, else not.
  const { userCredentials } = useContext(Context);
  // For edit-mode..
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const retrievedPost = await axiosInstance.get("/posts/" + postId);
      setPost(retrievedPost.data);
      console.log(retrievedPost.data);
      // set the data for editing..
      setPostTitle(retrievedPost.data.title);
      setPostDescription(retrievedPost.data.description);
      setIsEditMode(false);
    };

    // make a call..
    fetchPost();
  }, [postId]); // this is must, else going into loop..

  /* various helping handlers....*/
  const toggleEditMode = async () => {
    //evnt.preventDefault();
    // isEditMode ? setIsEditMode(false) : setIsEditMode(true); // toggle between edits..
    // handlePostUpdate(); // update after editing switches..
    setIsEditMode(true);
  };

  const handlePostUpdate = async () => {
    //evnt.preventDefault();
    // create the update post..
    //const updatedPost = ;
    console.log("[INFO] Updated post: ");
    // Peform update..
    try {
      await axiosInstance.put(`/posts/${postId}`, {
        username: userCredentials.data.username,
        title: postTitle,
        description: postDescription,
      });
      console.info("[INFO] Post updated successfully.!!");
      // re-load to display the updated post..
      //window.location.reload();
    } catch (error) {
      console.error("[ERROR] Post updation error. Err: ", error);
    }

    // as done with editing.. turn off the edit mode..
    setIsEditMode(false);
  };

  const handlePostDelete = async (evnt) => {
    try {
      await axiosInstance.delete(`/posts/${postId}`, {
        data: { username: userCredentials.data.username },
      });
      //navigate to home page..
      window.location.replace("/");
    } catch (error) {
      console.error("[ERROR] Post deletion error");
    }
  };

  // main location of photos..
  const PUBLIC_FOLDER = "https://blog-in-mern.herokuapp.com/assets/images/";
  //console.info("[INFO] post banner: ", post.postBannerFilename);
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
          {isEditMode ? (
            <>
              {/* -----------When in edit mode.. -----------*/}
              <input
                type="text"
                className="editmode-title"
                placeholder="Enter blog title here.."
                autoFocus={true}
                autoCapitalize={"true"}
                name="postTitle"
                autoFocus
                title="Enter the new title of post"
                value={postTitle}
                onChange={(evnt) => {
                  setPostTitle(evnt.target.value);
                  console.log(postTitle);
                }}
              />
            </>
          ) : (
            <>
              {/* -----------When not in edit mode.. -----------*/}
              {postTitle}
            </>
          )}
          {/** Only if its the author who is viewing, allow these options.. "?" is used to handle, when no user is logged in. i.e., even without login, can view posts, but can't edit*/}
          {post.username === userCredentials?.data.username && (
            <div className="postEdit">
              <i
                className="postEdit-icon fa-solid fa-pen-to-square"
                onClick={toggleEditMode}
                title={isEditMode ? "Switch Editing OFF" : "Switch Editing ON"}
              ></i>
              <i
                className="postEdit-icon fa-solid fa-trash-can"
                onClick={handlePostDelete}
                title="Delete Post"
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
        <p>
          {isEditMode ? (
            <>
              {/* -----------When in edit mode.. -----------*/}
              <textarea
                className="editmode-postDescription"
                type="text"
                value={postDescription}
                title="Enter description of blog"
                onChange={(evnt) => setPostDescription(evnt.target.value)}
                // required={true}
              ></textarea>
            </>
          ) : (
            <>
              {/* -----------When not in edit mode.. -----------*/}
              {postDescription}
            </>
          )}
        </p>
        {isEditMode && (
          <button className="editmode-btnUpdatePost" onClick={handlePostUpdate}>
            Update Post
          </button>
        )}
      </div>
    </div>
  );
}
