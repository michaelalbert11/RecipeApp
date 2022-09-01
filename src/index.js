import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./context/RecipeList.context";
import RecipeSelect from "./context/RecipeSelect.context";
import CurrentRecipe from "./context/CurrentRecipe.context";
import SavedRecipes from "./context/SavedRecipes.context";
import Category from "./context/Category.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeList>
        <RecipeSelect>
          <CurrentRecipe>
            <SavedRecipes>
              <Category>
                <App />
              </Category>
            </SavedRecipes>
          </CurrentRecipe>
        </RecipeSelect>
      </RecipeList>
    </BrowserRouter>
  </React.StrictMode>
);
