import React from "react";
import "./userSettings.css";

export default function UserSettings() {
  return (
    <div className="userSettingsWrapper">
      <div className="accountControls">
        <span className="updateAccDetails">
          <i class="updateIcon fa-solid fa-pen-to-square"></i>Update Account
          details
        </span>
        <span className="deleteAccount">
          <i class="deleteIcon fa-solid fa-trash-can"></i>Delete Account
        </span>
      </div>
      <form className="userDetails">
        <label htmlFor="profilePicture" className="lblProfilePicture">
          Profile Picture
        </label>
        <div className="mediaDetails">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User profile picture"
            className="profilePicture"
          ></img>
          <label htmlFor="imageUpload">
            <i class="imageUpload fa-solid fa-circle-user"></i>
          </label>
          <input type="file" id="imageUpload" style={{ display: "none" }} />
        </div>
        <div className="userCredentials">
          <label htmlFor="username" className="lblUsername">
            Username
          </label>
          <input type="text" id="username" name="username" className="username" />
          <label htmlFor="userEmail" className="lblEmail">
            E-mail
          </label>
          <input type="email" id="userEmail" name="email" className="email" />
          <label htmlFor="password"></label>
          <label htmlFor="userPassword">Password</label>
          <input type="password" id="userPassword" name="password" className="password" />
        </div>
        <input type="submit" value="Submit" className="submitForm" />
      </form>
    </div>
  );
}
