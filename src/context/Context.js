import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// How the state before login should be..??
// After TRIED logging in, these gets updated, and accessed by other components
const INITIAL_STATE = {
  userCredentials: JSON.parse(localStorage.getItem("userLoginDetails")) || null, // How the user data is accessed by other?? -- below contextProbiver
  isFetching: false,
  error: false, // Will become true, if login fails.
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // On which reducer has to work with..

  useEffect(() => {
    localStorage.setItem(
      "userLoginDetails", // key
      JSON.stringify(state.userCredentials) // value..
    );
  }, [state.userCredentials]); // use this effect, when changed state.userCredentials..

  return (
    <Context.Provider
      value={{
        userCredentials: state.userCredentials,
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
