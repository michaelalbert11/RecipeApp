import React, { useContext, useReducer } from "react";
import { SavedRecipesReducer } from "../hooks/SavedRecipeReducer.hook";
const SavedRecipesContext = React.createContext();
const initialSavedRecipes = [];
const SavedRecipes = ({ children }) => {
  const [state, dispatch] = useReducer(
    SavedRecipesReducer,
    initialSavedRecipes
  );
  return (
    <SavedRecipesContext.Provider value={{ state, dispatch }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};
export const SavedRecipesState = () => {
  return useContext(SavedRecipesContext);
};
export default SavedRecipes;
