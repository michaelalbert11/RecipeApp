import React, { useContext, useReducer } from "react";
import { SavedRecipesReducer } from "../hooks/SavedRecipeReducer.hook";
import { RecipeListContext } from "../App";
const SavedRecipesContext = React.createContext();
const SavedRecipes = ({ children }) => {
  const { recipeList } = useContext(RecipeListContext);
  const [savedRecipes, dispatch] = useReducer(SavedRecipesReducer, recipeList);
  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, dispatch }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};
export const SavedRecipesState = () => {
  return useContext(SavedRecipesContext);
};
export default SavedRecipes;
