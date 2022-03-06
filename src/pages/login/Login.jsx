import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="wrapper">
      <div className="userLogin">
        <span className="title">Login</span>
        <form action="" className="loginForm">
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
          <input type="submit" value="Login" className="btnLogin" />
        </form>
        <button className="btnRegister">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}
