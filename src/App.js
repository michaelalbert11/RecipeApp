import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import { MainCourse, SideDish } from "./pages/Category.page";
import NavBar from "./components/NavBar/NavBar.component";
import SavedRecipes from "./pages/SavedRecipes.page";
export const RecipeListContext = React.createContext();
function App() {
  const [recipeList, setRecipeList] = useState([]);
  console.log(recipeList);
  // 25e4755ea5894d8098e74f88d8eec18d
  // ebea031fb63040498bef29db8a70d404
  useEffect(() => {
    const api = async () => {
      const api1 = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=ebea031fb63040498bef29db8a70d404&number=100"
      );
      // const api2 = await fetch(
      //   "https://api.spoonacular.com/recipes/random?apiKey=ebea031fb63040498bef29db8a70d404&number=100"
      // );

      const api1Data = await api1.json();
      // const api2Data = await api2.json();
      const mergedArray = [...api1Data.recipes];
      const filteredArray = mergedArray.map((recipe) =>
        recipe.image === undefined
          ? {
              ...recipe,
              image: "https://spoonacular.com/recipeImages/631888-556x470.jpg",
            }
          : // Object.assign(
            //   recipe,
            //   { isEditable: false },
            //   { isSaved: false },
            //   { isLikeable: true }
            // )
            recipe
      );

      setRecipeList(filteredArray);
    };
    api();
  }, []);

  const RecipeListContextValue = recipeList;
  return (
    <RecipeListContext.Provider value={RecipeListContextValue}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main-courses" element={<MainCourse />} />
        <Route path="side-dishes" element={<SideDish />} />
        <Route path="saved" element={<SavedRecipes />} />
      </Routes>
    </RecipeListContext.Provider>
  );
}

export default App;
