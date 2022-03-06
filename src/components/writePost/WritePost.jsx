import React from "react";
import "./writePost.css";

export default function WritePost() {
  return (
    <div className="writePost">
      <img
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Cover photo"
        className="uploadedCoverPhoto"
        title="Cover photo"
      />
      <form className="form-writePost">
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
            style={{ display: "none" }}
          />
          <input
            type="text"
            className="title"
            placeholder="Enter blog title here.."
            autoFocus={true}
            autoCapitalize={true}
            name="postTitle"
            title="Enter title of blog"
          />
        </div>

        <div className="writePostGroup2">
          <textarea
            className="postDescription"
            type="text"
            placeholder="Write description of post here.."
            title="Enter description of blog"
          ></textarea>
        </div>
        <button className="btnSubmitPost" title="Create a new post">
          Submit Post
        </button>
      </form>
    </div>
  );
}
