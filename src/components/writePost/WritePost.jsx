import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import "./writePost.css";

export default function WritePost() {
  // for dealing with post writing..
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [postBanner, setPostBanner] = useState(null);
  const { userCredentials } = useContext(Context);

  // handle the publishing of post..
  const handlePublish = async (e) => {
    e.preventDefault();

    // Create the post..
    const newPost = {
      username: userCredentials.username,
      title,
      description,
    };
    // // Publish the post //
    // for post-banner..
    if (postBanner) {
      const data = new FormData();
      const filename = Date.now() + postBanner.name; // to give a unique name..
      data.append("filename", filename);
      data.append("file", postBanner);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("[ERROR] Error in uploading the post banner");
      }
    }
    // Post it..
    try {
      const response = await axios.post("/posts/", newPost);
      // When could successfully able to publish the post.. display that post..
      window.location.replace("/post/" + response.data._id);
    } catch (error) {}
  };

  return (
    <div className="writePost">
      {postBanner && (
        <img
          src={URL.createObjectURL(postBanner)}
          alt="Cover photo"
          className="uploadedCoverPhoto"
          title="Cover photo"
        />
      )}
      <form className="form-writePost" onSubmit={handlePublish}>
        <div className="writePostGroup1">
          <label htmlFor="fileInput">
            <i
              className="uploadButton fa-solid fa-plus"
              title="Upload Cover photo"
            ></i>
          </label>
          <input
            type="file"
            id="fileInput"
            className="fileUpload"
            onChange={(evnt) => setPostBanner(evnt.target.files[0])} // single file...
            style={{ display: "none" }}
          />
          <input
            type="text"
            className="title"
            placeholder="Enter blog title here.."
            autoFocus={true}
            autoCapitalize={"true"}
            name="postTitle"
            title="Enter title of blog"
            onChange={(evnt) => setTitle(evnt.target.value)}
          />
        </div>

        <div className="writePostGroup2">
          <textarea
            className="postDescription"
            type="text"
            placeholder="Write description of post here.."
            title="Enter description of blog"
            onChange={(evnt) => setDescription(evnt.target.value)}
          ></textarea>
        </div>
        <button
          className="btnSubmitPost"
          title="Create a new post"
          type="submit"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
}
