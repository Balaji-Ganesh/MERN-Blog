import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-image"
        src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress"
        alt="Post image"
      ></img>
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Arts</span>
          <span className="post-category">Life</span>
        </div>
        <div className="post-title">Lorem Ipsum</div>
        <div className="post-timestamp">1 hour ago</div>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        pariatur animi modi dolore similique voluptate officiis eos temporibus
        labore nulla iure, saepe voluptatum, itaque sint provident ut eveniet.
        Eveniet, natus.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
        velit distinctio ipsum dolorum possimus deserunt, eaque illo odit
        maiores recusandae, voluptate eligendi inventore, mollitia temporibus ab
        necessitatibus ex laboriosam?
      </p>
    </div>
  );
}
