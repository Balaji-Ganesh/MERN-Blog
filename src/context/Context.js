import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// How the state before login should be..??
// After TRIED logging in, these gets updated, and accessed by other components
const INITIAL_STATE = {
  // How the user data is accessed by other?? -- below contextProvider
  //userCredentials: JSON.parse(localStorage.getItem("user")) || null, // if already logged in.. get those, else a new... -- Why showing the error in this line..??
  userCredentials: null, // if already logged in.. get those, else a new...
  isFetching: false,
  error: false, // Will become true, if login fails.
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // On which reducer has to work with..

  useEffect(() => {
    console.log("[INFO] in useEffect, value in state: ", state) 
    localStorage.setItem("user", JSON.stringify(state.user));
    //console.log("[INFO] useEffect in Context.js");
  }, [state]); // do this upon change of this..
  return (
    <Context.Provider
      value={{
        userCredentials: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // Dispatch the details to te server..
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
