import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios"
import { useLocation } from "react-router-dom";

export default function Home() {

  const [posts, setPosts] = useState([]);
  //const location = useLocation();
  const {search} = useLocation();

  //console.log(location)  -- helped in finding the data. It's in 'search'

  useEffect(() => {
    const fetchPosts = async () => {
       const retrievedPosts = await axios.get("/posts/"+search);
       console.log(retrievedPosts.data);
      setPosts(retrievedPosts.data)
    }
    // Call the function..
    fetchPosts();
  }, [search])

  return (
    <>
      <div className="home">
        <Header />
        <div className="content">
          <Posts posts={posts}/>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
