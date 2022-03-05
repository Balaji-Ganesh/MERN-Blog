import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="title">Also read..</div>
        <div className="content">
          <ul className="list">
            <li className="listItem article">Global Warming</li>
            <li className="listItem article">Deforestation</li>
            <li className="listItem article">Ozone hole</li>
            <li className="listItem article">Ozone hole</li>
            <li className="listItem article">Ozone hole</li>
            <li className="listItem article">Ozone hole</li>
            <li className="listItem article">Ozone hole</li>
            <li className="listItem article">Ozone hole</li>
          </ul>
        </div>
      </div>
      <div className="sidebarItem">
        <div className="title">About Us</div>
        <div className="content">
          <img
            className="contentImage"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></img>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            consectetur inventore error laboriosam unde magni, similique sint,
            soluta dicta
            <br />
            expedita maiores quos incidunt nemo animi eaque laborum? Est,
            praesentium eaque!
          </p>
        </div>
      </div>
      <div className="sidebarItem">
        <div className="title">Categories</div>
        <div className="content">
          <ul className="list">
            <li className="listItem">Life</li>
            <li className="listItem">Music</li>
            <li className="listItem">Style</li>
            <li className="listItem">Sports</li>
            <li className="listItem">Technology</li>
          </ul>
        </div>
      </div>
      <div className="sidebarItem">
        <div className="title">Follow Us on</div>
        <div className="content socialMedia">
          <i className=" socialMedia fa-brands fa-facebook"></i>
          <i className=" socialMedia fa-brands fa-instagram"></i>
          <i className=" socialMedia fa-brands fa-twitter"></i>
          <i className=" socialMedia fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
}
