import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NavBar from "./components/NavBar/NavBar.component";
import SavedRecipes from "./pages/SavedRecipes.page";
import Categories from "./pages/Categories/Categories.page";
import Category from "./context/Category.context";
import { default as SavedRecipesCont } from "./context/SavedRecipes.context";
import SearchContext from "./context/SearchContext.context";
import AddRecipe from "./pages/AddRecipe.page";
import CurrentRecipe from "./context/CurrentRecipe.context";
export const RecipeListContext = React.createContext();
function App() {
  const [recipeList, setRecipeList] = useState([]);
  console.log(recipeList);
  // 25e4755ea5894d8098e74f88d8eec18d
  // ebea031fb63040498bef29db8a70d404
  useEffect(() => {
    const api = async () => {
      const api1 = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=25e4755ea5894d8098e74f88d8eec18d&number=100"
      );
      const api1Data = await api1.json();
      const filteredArray = api1Data.recipes.map((recipe) =>
        recipe.image === undefined
          ? {
              ...recipe,
              image: "https://spoonacular.com/recipeImages/631888-556x470.jpg",
            }
          : recipe
      );

      setRecipeList(filteredArray);
    };
    api();
  }, []);

  function handleRecipeAdd(newRecipe) {
    setRecipeList((prevState) => [...prevState, newRecipe]);
  }
  const RecipeListContextValue = { recipeList, handleRecipeAdd };
  return (
    <RecipeListContext.Provider value={RecipeListContextValue}>
      <CurrentRecipe>
        <SavedRecipesCont>
          <Category>
            <SearchContext>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="saved" element={<SavedRecipes />} />
                <Route path="add-recipe" element={<AddRecipe />} />
                <Route path="categories/:category" element={<Categories />} />
              </Routes>
            </SearchContext>
          </Category>
        </SavedRecipesCont>
      </CurrentRecipe>
    </RecipeListContext.Provider>
  );
}

export default App;
