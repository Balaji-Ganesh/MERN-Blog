import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
// import dotenv from "dotenv";
// dotenv.config();


export default function TopBar() {
  //const userLoginStatus = false; -- used for testing..
  const { userCredentials, dispatch } = useContext(Context);
  console.log("[INFO] in login.jsx", userCredentials);
  // handling logout..
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // update the state -- goes to logout state..
    localStorage.removeItem("userLoginDetails");  // remove from the localStorage too..
    window.location.replace("/"); // navigate to home-page..
  };

  // for profile picture....
  const PUBLIC_FOLDER = "https://blog-in-mern.herokuapp.com/assets/images/";
  return (
    <div className="topBar">
      <div className="topLeft">
        {/* Customization idea: Normal look: gray, on mouse-hover their original color (as per brand color) */}
        <i className=" socialMedia fa-brands fa-facebook"></i>
        <i className=" socialMedia fa-brands fa-instagram"></i>
        <i className=" socialMedia fa-brands fa-twitter"></i>
        <i className=" socialMedia fa-brands fa-linkedin-in"></i>
      </div>
      <div className="topCenter">
        <ul className="listItems">
          <li className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="aboutUs">
              About Us
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="item" onClick={handleLogout}>
            {userCredentials && "Logout"}
          </li>
          {/* Try placing this in the profile image with a hover box, like github*/}
        </ul>
      </div>
      <div className="topRight">
        {userCredentials ? (
          <Link to="/userSettings" className="link">
            <img
              className="profileImage"
              src={
                (userCredentials &&
                  PUBLIC_FOLDER +
                    userCredentials.data.profilePicture) || // actual image..
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // default image..
              }
              alt="Profile Picture"
              title={`Open ${userCredentials.data.username}'s settings`}
            ></img>
          </Link>
        ) : (
          <ul className="listItems">
            <li className="item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
