import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./context/RecipeList.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeList>
        <App />
      </RecipeList>
    </BrowserRouter>
  </React.StrictMode>
);
