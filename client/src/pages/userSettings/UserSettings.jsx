import React, { useContext, useEffect, useState } from "react";
import "./userSettings.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
// import dotenv from "dotenv";
// dotenv.config();

export default function UserSettings() {
  // Get the user credentials..
  const { userCredentials, dispatch } = useContext(Context);
  // for edit-mode..
  const [username, setUsername] = useState(userCredentials.data.username);
  const [email, setEmail] = useState(userCredentials.data.email);
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateStatus, setUpdateStatus] = useState("");
  // useEffect(() => {
  //   setUsername(userCredentials.data.username);
  //   setEmail(userCredentials.data.email);
  // });

  /** Helpers.. */
  const logout = () => {
    dispatch({ type: "LOGOUT" }); // update the state -- goes to logout state..
    localStorage.removeItem("userLoginDetails"); // clear the localStorage..,
    window.location.replace("/"); // navigate to home-page..
  };
  const handleUpdateAccDetails = async (evnt) => {
    evnt.preventDefault();
    // update details..
    const updatedDetails = {
      userId: userCredentials.data._id,
      username,
      email,
      password,
    };
    dispatch({ type: "UPDATE_START" });
    // if updated profile picture too..
    if (profilePicture) {
      const data = new FormData();
      const filename = "profile_" + Date.now() + "_" + profilePicture.name; // using Date.now), to be safe from duplicate names..
      data.append("filename", filename);
      data.append("file", profilePicture);
      updatedDetails.profilePicture = filename;
      // upload the profile picture..
      try {
        await axiosInstance.post("/upload", data);
      } catch (error) {
        console.error(
          "[ERROR] Error in updating profile picture. Err: ",
          error
        );
      }
    }
    // update the rest of the credentials..
    try {
      const response = await axiosInstance.put(
        "/users/" + userCredentials.data._id,
        updatedDetails
      );
      //console.log("new details: ", response.data);
      setUpdateStatus("Details updated sucessfully..!!");
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
      logout();
    } catch (error) {
      console.error("[ERROR] Error in updating user details");
      setUpdateStatus("Error..!! Details not updated.");
      dispatch({ type: "UPDATE_FAILURE" });
    }
    // turn on the edit mode off..
    setIsEditMode(false);
    // rather, reload ..!!
  };
  const handleDeleteAcc = async () => {
    try {
      console.log("Id: ", userCredentials.data._id);
      await axiosInstance.delete(`/users/${userCredentials.data._id}`);
      console.info("[INFO] User account deleted successfully");
      logout();
    } catch (error) {
      console.error("[ERROR] Error in deletion of user account");
    }
  };
  // for profie pic
  const PUBLIC_FOLDER = "https://blog-in-mern.herokuapp.com/assets/images/";
  return (
    <div className="userSettingsWrapper">
      <div className="accountControls">
        <span
          className="updateAccDetails"
          onClick={(evnt) => setIsEditMode(true)}
        >
          <i className="updateIcon fa-solid fa-pen-to-square"></i>Update Account
          details
        </span>
        <span className="deleteAccount" onClick={handleDeleteAcc}>
          <i className="deleteIcon fa-solid fa-trash-can"></i>Delete Account
        </span>
      </div>
      <form className="userDetails" onSubmit={handleUpdateAccDetails}>
        <label htmlFor="profilePicture" className="lblProfilePicture">
          Profile Picture
        </label>
        <div className="mediaDetails">
          <img
            src={
              profilePicture
                ? URL.createObjectURL(profilePicture)
                : userCredentials
                ? PUBLIC_FOLDER + userCredentials.data.profilePicture // actual image..
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // default image..
            }
            alt="User profile picture"
            className="profilePicture"
          ></img>
          <label htmlFor="imageUpload">
            {isEditMode && (
              <i className="imageUpload fa-solid fa-circle-user"></i>
            )}
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            onChange={(evnt) => setProfilePicture(evnt.target.files[0])}
          />
        </div>
        <div className="userCredentials">
          <label htmlFor="username" className="lblUsername">
            Username
          </label>
          {isEditMode ? (
            <>
              <input
                type="text"
                id="username"
                name="username"
                className="username"
                placeholder={username}
                onChange={(evnt) => setUsername(evnt.target.value)}
                required
              />
            </>
          ) : (
            <div className="settings-username">
              {userCredentials.data.username}
            </div>
          )}

          <label htmlFor="userEmail" className="lblEmail">
            E-mail
          </label>
          {isEditMode ? (
            <>
              <input
                type="email"
                id="userEmail"
                name="email"
                className="email"
                placeholder={email}
                onChange={(evnt) => setEmail(evnt.target.value)}
                required
              />
            </>
          ) : (
            <>
              <div className="settings-email">{userCredentials.data.email}</div>
            </>
          )}
          <label htmlFor="password"></label>
          <label htmlFor="userPassword">Password</label>
          {isEditMode ? (
            <>
              <input
                type="password"
                id="userPassword"
                name="password"
                className="password"
                placeholder="Enter a new password"
                required
                onChange={(evnt) => setPassword(evnt.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="password"
                className="settings-password"
                // value={"1234"}
                placeholder="password"
                disabled
              />
            </>
          )}
        </div>
        {isEditMode && (
          <input
            type="submit"
            value="Update Account Details"
            className="submitForm"
          />
        )}
        {updateStatus && <span style="align-self: center">updateStatus</span>}
      </form>
    </div>
  );
}
