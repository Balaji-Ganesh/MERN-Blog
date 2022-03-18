import React from "react";
import "./header.css"; 


function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        
        <span className="titleSm">React & Node</span>
        <span className="titleLg">BLOG</span>
      </div>
      <img
        src={require("../../assets/susan-q-yin-2JIvboGLeho-unsplash.jpg")}
        alt=""
        className="headerImg"
      />
    </div>
  );
}

export default Header;