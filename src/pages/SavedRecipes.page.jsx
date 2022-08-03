import React from "react";
import { SavedRecipesState } from "../context/SavedRecipes.context";
import RecipeCard from "../components/RecipeCard/RecipeCard.component";
export default function SavedRecipes() {
  const { state } = SavedRecipesState();
  const saveRecipesList = state.map((recipe) => <RecipeCard recipe={recipe} />);
  return <section className="container">{saveRecipesList}</section>;
}
