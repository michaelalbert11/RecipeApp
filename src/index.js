import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SavedRecipes from "./context/SavedRecipes.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SavedRecipes>
        <App />
      </SavedRecipes>
    </BrowserRouter>
  </React.StrictMode>
);
