import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent from, refreshing itself..
    setError(false); // Initially, expecting no error..
    try {
      const response = await axiosInstance.post("/authentication/registration", {
        username,
        email,
        password,
      });
      //console.log(response);

      response.data && window.location.replace("/login"); // Upon successful registration, navigate to login
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="userRegister">
        <span className="title">Register</span>
        <form action="" className="registrationForm" onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="item">
            <label htmlFor="userEmail">e-mail</label>
            <input
              type="email"
              id="userEmail"
              placeholder="Enter e-mail ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="item">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              className="userPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Register" className="btnRegister" />
          {error && <span style={{color: 'red', marginTop: '10px'}}> Something went wrong </span>}  {/* Later handle this with notification messages in MUI */}
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
