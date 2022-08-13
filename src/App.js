import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NavBar from "./components/NavBar/NavBar.component";
import SavedRecipes from "./pages/SavedRecipes.page";
import Categories from "./pages/Categories/Categories.page";
import Category from "./context/Category.context";
import { default as SavedRecipesCont } from "./context/SavedRecipes.context";
import AddRecipe from "./pages/AddRecipe.page";
import CurrentRecipe from "./context/CurrentRecipe.context";
import { RecipeListState } from "./context/RecipeList.context";
import Loader from "./components/Loader/Loader.component";
export const RecipeListContext = React.createContext();
function App() {
  const [recipeList, setRecipeList] = useState([]);
  console.log(recipeList);
  const { state, dispatch } = RecipeListState();
  // 25e4755ea5894d8098e74f88d8eec18d
  // ebea031fb63040498bef29db8a70d404
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=ebea031fb63040498bef29db8a70d404&number=100"
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

  function handleRecipeAdd(newRecipe) {
    setRecipeList((prevState) => [...prevState, newRecipe]);
  }
  const RecipeListContextValue = { recipeList, handleRecipeAdd };
  return (
    <RecipeListContext.Provider value={RecipeListContextValue}>
      <CurrentRecipe>
        <SavedRecipesCont>
          <Category>
            {state.loading ? (
              <Loader />
            ) : (
              <>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="saved" element={<SavedRecipes />} />
                  <Route path="add-recipe" element={<AddRecipe />} />
                  <Route path="categories/:category" element={<Categories />} />
                </Routes>
              </>
            )}
          </Category>
        </SavedRecipesCont>
      </CurrentRecipe>
    </RecipeListContext.Provider>
  );
}

export default App;
