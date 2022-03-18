import axios from "axios";
import React from "react";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const usernameRef = useRef(); // because of using this, doesn't need the `onChange`.
  const passwordRef = useRef();
  const { userCredentials, dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    // send data to api..
    try {
      const response = await axios.post("/authentication/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      // after could able to fetch the details properly, without any errors.. update the status + place the payload....
      dispatch({ type: "LOGIN_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.error("[ERROR] An error occured in fetching the data.");
    }
  };
  console.log(isFetching); // we'll get this(user) from index.js..

  return (
    <div className="wrapper">
      <div className="userLogin">
        <span className="title">Login</span>
        <form action="" className="loginForm" onSubmit={handleLogin}>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username ID"
              ref={usernameRef}
            />
          </div>
          <div className="item">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              className="userPassword"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <input type="submit" value="Login" className="btnLogin" disabled={isFetching} // prevents clicking again and again, while already in fetching..
          />
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
