import React from "react";
import RecipeInput from "../components/RecipeInput/RecipeInput.component";
import { CurrentRecipeState } from "../context/CurrentRecipe.context";
import { RecipeListState } from "../context/RecipeList.context";
export default function AddRecipe() {
  const { currentRecipe } = CurrentRecipeState();
  const { dispatch } = RecipeListState();
  return (
    <RecipeInput
      title={"add recipe"}
      handler={() => dispatch({ type: "ADD RECIPE", payload: currentRecipe })}
      action="add recipe"
    />
  );
}
