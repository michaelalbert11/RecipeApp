import React, { useContext, useReducer } from "react";
import { RecipeListReducer } from "../reducers/RecipeListReducer";
const RecipeListContext2 = React.createContext();
export default function RecipeList({ children }) {
  const initialState = {
    loading: true,
    recipeList: [],
    error: undefined,
  };
  const [state, dispatch] = useReducer(RecipeListReducer, initialState);
  console.log("data", state);
  function selectRecipe(id) {
    console.log(state.recipeList.find((recipe) => recipe.id === id));
  }
  return (
    <RecipeListContext2.Provider value={{ state, dispatch, selectRecipe }}>
      {children}
    </RecipeListContext2.Provider>
  );
}

export const RecipeListState = () => {
  return useContext(RecipeListContext2);
};
