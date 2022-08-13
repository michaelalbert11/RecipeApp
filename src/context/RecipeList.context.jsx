import React, { useContext, useReducer } from "react";
import { RecipeListReducer } from "../reducers/RecipeListReducer";
const RecipeListContext2 = React.createContext();
export default function RecipeList({ children }) {
  const initialState = {
    loading: true,
    recipeList: [],
    error: "",
  };
  const [state, dispatch] = useReducer(RecipeListReducer, initialState);
  console.log("data", state.recipeList);

  return (
    <RecipeListContext2.Provider value={{ state, dispatch }}>
      {children}
    </RecipeListContext2.Provider>
  );
}

export const RecipeListState = () => {
  return useContext(RecipeListContext2);
};
