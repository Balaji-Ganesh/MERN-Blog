import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>       {/*// Used here, so that all the child components can use.*/}
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
