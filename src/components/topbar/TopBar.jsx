import React from "react";
import "./topbar.css";

export default function TopBar() {
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
          <li className="item">Home</li>
          <li className="item">About Us</li>
          <li className="item">Write</li>
          <li className="item">Logout</li>{" "}
          {/* Try placing this in the profile image with a hover box, like github*/}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="profileImage"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Profile Image"
        ></img>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
