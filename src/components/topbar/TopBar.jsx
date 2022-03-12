import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const userLoginStatus = false;
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
          <li className="item">{userLoginStatus && "Logout"}</li>{" "}
          {/* Try placing this in the profile image with a hover box, like github*/}
        </ul>
      </div>
      <div className="topRight">
        {userLoginStatus ? (
          <Link to="/userSettings" className="link">
            <img
              className="profileImage"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile Image"
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
