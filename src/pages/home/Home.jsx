import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="content">
          <Posts />
          <Sidebar />
        </div>
      </div>
    </>
  );
}
