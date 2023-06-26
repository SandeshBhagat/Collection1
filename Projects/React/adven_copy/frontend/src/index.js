import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ViewAdventure from "./ViewAdventure";
import AllAdv from "./AllAdv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllAdv />
    {/* <App /> */}
    <ViewAdventure />
  </React.StrictMode>
);

reportWebVitals();
