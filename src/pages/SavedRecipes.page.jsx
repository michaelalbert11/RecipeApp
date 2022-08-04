import React from "react";
import { SavedRecipesState } from "../context/SavedRecipes.context";
import RecipeCard from "../components/RecipeCard/RecipeCard.component";
import "./template.style.scss";
export default function SavedRecipes() {
  const { savedRecipes } = SavedRecipesState();
  return (
    <section className="template container">
      <h1 className="template__heading">Saved recipes</h1>
      <div className="template-card__grid">
        {savedRecipes.map((recipe) => (
          <RecipeCard
            className="template-card__grid-item"
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </section>
  );
}
