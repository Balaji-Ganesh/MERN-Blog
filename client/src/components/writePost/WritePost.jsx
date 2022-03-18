import React, { useContext, useState } from "react";
import "./writePost.css";
import { axiosInstance } from "../../config";
import Post from "../post/Post";
import Context from "../../context/Context";

export default function WritePost() {
  // writing the post..
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postBanner, setPostBanner] = useState(null);

  /** publish the post.. **/
  // Get details.. who is publishing the post..
  const { userCredentials } = useContext(Context);
  // now handle it..
  const handlePublishPost = async (evnt) => {
    evnt.preventDefault(); // prevent itself from loading..
    // create the post..
    const newPost = {
      title: postTitle,
      description: postDescription,
      username: userCredentials.data.username,
      postBannerFilename: postBanner,
    };
    // upload the post banner..
    if (postBanner) {
      const data = new FormData();
      const filename = Date.now() + "_" + postBanner.name; // Why Date.now() ..?? to prevent from errors, when two users store the same FILENAMEd image...
      data.append("filename", filename); // "filename" .. must also be same at server.. request.body.""filename""
      data.append("file", postBanner);
      newPost.postBannerFilename = filename; // attach the name to the "post"..
      // upload to server..
      try {
        await axiosInstance.post("/upload", data);
      } catch (error) {
        console.error("[ERROR] Unable to upload the post banner. Err: ", error);
      }
    }
    // upload the rest of the post details..
    try {
      console.info("[INFO] final post created is: ", newPost);
      const response = await axiosInstance.post("/posts/", newPost);
      // upon successful publishing of post, re-direct to the uploaded post..
      window.location.replace("/post/" + response.data._id);
    } catch (error) {
      console.error("[ERROR] Unable to publish post. Err: ", error);
    }
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
      <form className="form-writePost" onSubmit={handlePublishPost}>
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
            onChange={
              (evnt) => setPostBanner(evnt.target.files[0]) // first file..
            }
            style={{ display: "none" }}
            required={true}
          />
          <input
            type="text"
            className="title"
            placeholder="Enter blog title here.."
            autoFocus={true}
            autoCapitalize={"true"}
            name="postTitle"
            title="Enter title of blog"
            onChange={(evnt) => setPostTitle(evnt.target.value)}
            required={true}
          />
        </div>

        <div className="writePostGroup2">
          <textarea
            className="postDescription"
            type="text"
            placeholder="Write description of post here.."
            title="Enter description of blog"
            onChange={(evnt) => setPostDescription(evnt.target.value)}
            required={true}
          ></textarea>
        </div>
        <button
          className="btnSubmitPost"
          type="submit"
          title="Create a new post"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
