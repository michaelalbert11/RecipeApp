import React, { useContext, useReducer } from "react";
import { SavedRecipesReducer } from "../reducers/SavedRecipeReducer";
const SavedRecipesContext = React.createContext();
const SavedRecipes = ({ children }) => {
  const [savedRecipes, dispatch] = useReducer(SavedRecipesReducer, []);
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
