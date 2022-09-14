import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NavBar from "./components/NavBar/NavBar.component";
import SavedRecipes from "./pages/SavedRecipes.page";
import Categories from "./pages/Categories.page";
import AddRecipe from "./pages/AddRecipe.page";
import { RecipeListState } from "./context/RecipeList.context";
import Loader from "./components/Loader/Loader.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./notification.style.scss";
import { RecipeSelectState } from "./context/RecipeSelect.context";
import RecipeView from "./components/RecipeView/RecipeView.component";

import Login from "./pages/Login.page";
function App() {
  const { state, dispatch } = RecipeListState();
  const { recipeId } = RecipeSelectState();
  // 25e4755ea5894d8098e74f88d8eec18d
  // ebea031fb63040498bef29db8a70d404

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=25e4755ea5894d8098e74f88d8eec18d&number=100"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.recipes,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, [dispatch]);

  return (
    <>
      {state.loading ? (
        <Loader />
      ) : (
        <main className="main">
          <NavBar />
          <ToastContainer
            position="top-center"
            theme="dark"
            closeOnClick={false}
            autoClose={500}
            hideProgressBar
          />

          {recipeId && <RecipeView />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="saved" element={<SavedRecipes />} />
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="login" element={<Login />} />
            <Route path="categories/:category" element={<Categories />} />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
