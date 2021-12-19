import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyle";
import Spring from "./pages/useSpring";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Spring />
  </React.StrictMode>,
  document.getElementById("root")
);
