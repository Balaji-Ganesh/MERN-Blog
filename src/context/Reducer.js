import { createContext, useReducer, useEffect } from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        userCredentials: null, // initially no user data present.
        isFetching: true, // as still fetching the details..
        error: false, // as until, the details are fetched, can't determine status.
      };
    case "LOGIN_SUCCESS":
      return {
        userCredentials: action.payload, // as fetching gave some payload of data.
        isFetching: false, // as fetching finished..
        error: false, // as fetching, ended with no-errors..
      };
    case "LOGIN_FAILURE":
      return {
        userCredentials: null, // as fetcing gave no data, because of some error..
        isFetching: false, // as fetching completed.
        error: true, // as fetching failed, because of some error.
      };
    case "LOGOUT":
      return {
        userCredentials: null, // as fetcing gave no data, because of some error..
        isFetching: false, // as fetching completed.
        error: false, // as fetching failed, because of some error.
      };
  }
};

export default Reducer;