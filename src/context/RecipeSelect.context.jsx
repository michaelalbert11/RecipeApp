import React, { useState, useContext } from "react";
const RecipeSelectContext = React.createContext();
export default function RecipeSelect({ children }) {
  const [recipeId, setRecipeId] = useState(undefined);

  return (
    <RecipeSelectContext.Provider value={{ recipeId, setRecipeId }}>
      {children}
    </RecipeSelectContext.Provider>
  );
}

export const RecipeSelectState = () => useContext(RecipeSelectContext);
