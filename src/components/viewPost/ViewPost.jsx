import React from "react";
import "./viewPost.css";

export default function ViewPost() {
  return (
    <div className="viewPost">
      <div className="postInfo">
        <img
          src="https://images.unsplash.com/photo-1645389301578-256d15903114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80"
          alt="View post image"
          className="viewPost-image"
        />
        <div className="postTitle">
          Lorem Ipsum dolar sit amet
          <div className="postEdit">
            <i class="postEdit-icon fa-solid fa-pen-to-square"></i>
            <i class="postEdit-icon fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div className="postMetaInfo">
          <div className="postAuthor">
            Author: <b>Govind</b>
          </div>
          <div className="postTimeStamp">1 hour ago</div>
        </div>
      </div>
      <div className="postContent">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          cupiditate pariatur, corporis voluptates voluptate doloribus in
          repellendus, reprehenderit ex quod fugiat itaque magnam similique
          veritatis veniam harum saepe quos sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          <br />
          Aspernatur officia dolore nulla excepturi aliquid odit molestias. Sint
          maxime dolores ullam expedita possimus dolorem atque unde quidem,
          omnis, id quasi eum?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          cupiditate pariatur, corporis voluptates voluptate doloribus in
          repellendus, reprehenderit ex quod fugiat itaque magnam similique
          veritatis veniam harum saepe quos sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          <br />
          Aspernatur officia dolore nulla excepturi aliquid odit molestias. Sint
          maxime dolores ullam expedita possimus dolorem atque unde quidem,
          omnis, id quasi eum? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cum cupiditate pariatur, corporis voluptates
          voluptate doloribus in repellendus, reprehenderit ex quod fugiat
          itaque magnam similique veritatis veniam harum saepe quos sint. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Aspernatur officia dolore nulla excepturi aliquid odit molestias. Sint
          maxime dolores ullam expedita possimus dolorem atque unde quidem,
          omnis, id quasi eum?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cum cupiditate pariatur, corporis voluptates
          voluptate doloribus in repellendus, reprehenderit ex quod fugiat
          itaque magnam similique veritatis veniam harum saepe quos sint. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Aspernatur officia dolore nulla excepturi aliquid odit molestias. Sint
          maxime dolores ullam expedita possimus dolorem atque unde quidem,
          omnis, id quasi eum?
        </p>
      </div>
    </div>
  );
}
