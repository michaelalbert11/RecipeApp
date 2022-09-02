import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NavBar from "./components/NavBar/NavBar.component";
import SavedRecipes from "./pages/SavedRecipes.page";
import Categories from "./pages/Categories/Categories.page";
import AddRecipe from "./pages/AddRecipe.page";
import { RecipeListState } from "./context/RecipeList.context";
import Loader from "./components/Loader/Loader.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./notification.style.scss";
import { RecipeSelectState } from "./context/RecipeSelect.context";
import RecipeView from "./components/RecipeView/RecipeView.component";
import { CurrentRecipeState } from "./context/CurrentRecipe.context";
import RecipeInput from "./components/RecipeInput/RecipeInput.component";
import { useState } from "react";
import { MdClear } from "react-icons/md";
import Login from "./pages/Login.page";
function App() {
  const { currentRecipe } = CurrentRecipeState();
  const { state, dispatch } = RecipeListState();
  const { recipeId } = RecipeSelectState();
  const [viewRecipeEdit, setViewRecipeEdit] = useState(false);
  console.log(viewRecipeEdit);
  // 25e4755ea5894d8098e74f88d8eec18d
  // ebea031fb63040498bef29db8a70d404
  function openRecipeEdit() {
    setViewRecipeEdit(true);
  }
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
            autoClose={800}
            hideProgressBar
          />
          {viewRecipeEdit && (
            <section
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                position: "fixed",
                height: "100vh",
                width: "100vw",
              }}
            >
              <span
                onClick={setViewRecipeEdit(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  color: "red",
                  fontSize: "1.3rem",
                }}
              >
                <MdClear />
              </span>
              <RecipeInput
                action={"save recipe"}
                handler={() =>
                  dispatch({
                    type: "EDIT_SAVED_RECIPE",
                    payload: currentRecipe,
                  })
                }
                title={"edit recipe"}
                notification={"recipe saved"}
              />
            </section>
          )}
          {recipeId && (
            <RecipeView recipeDelete={dispatch} openRecipe={openRecipeEdit} />
          )}
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
