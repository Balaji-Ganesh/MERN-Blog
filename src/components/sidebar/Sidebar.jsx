import React, {useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const retrievedCategories = await axios.get("/category");
      console.log(retrievedCategories)
      setCategories(retrievedCategories.data)
    }

    // call the function..
    fetchCategories();
  }, [])

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
            {categories.map((category) => (
              <Link to={`/?category=${category.name}`} className="link">
                <li className="listItem">{category.name}</li>
              </Link>
            ))}
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
