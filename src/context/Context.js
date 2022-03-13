import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

// How the state before login should be..??
// After TRIED logging in, these gets updated, and accessed by other components
const INITIAL_STATE = {
  user: null, // How the user data is accessed by other?? -- below contextProbiver
  isFetchauthorizationing: false,
  error: false, // Will become true, if login fails.
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // On which reducer has to work with..

  return (
    <Context.Provider
      value={{
        user: state.user,
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