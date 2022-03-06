import React from "react";
import { Link } from 'react-router-dom';
import "./register.css";

export default function Register() {
  return (
    <div className="wrapper">
      <div className="userRegister">
        <span className="title">Register</span>
        <form action="" className="registrationForm">
          <div className="item">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" placeholder="Enter username" />
          </div>
          <div className="item">
            <label htmlFor="userEmail">e-mail</label>
            <input type="email" id="userEmail" placeholder="Enter e-mail ID" />
          </div>
          <div className="item">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              className="userPassword"
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Register" className="btnRegister" />
        </form>
        <button className="btnLogin">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}
