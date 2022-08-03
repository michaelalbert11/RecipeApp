import React, { useContext } from "react";
import "./RecipeList.style.scss";
import { RecipeListContext } from "../../App";
import RecipeCard from "../RecipeCard/RecipeCard.component";
export default function RecipeList() {
  const recipeList = useContext(RecipeListContext);
  return (
    <section className="recipe-card__grid">
      {recipeList.map((recipe) => (
        <RecipeCard
          className="recipe-card__grid-item"
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </section>
  );
}
