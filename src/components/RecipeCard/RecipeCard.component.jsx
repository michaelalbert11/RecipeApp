import React from "react";
import "./RecipeCard.style.scss";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { SavedRecipesState } from "../../context/SavedRecipes.context";
export default function RecipeCard({ recipe }) {
  const { savedRecipes, dispatch } = SavedRecipesState();
  return (
    <div className="recipe-card">
      <img
        className="recipe-card__image"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="recipe-card__overlay">
        <span className="recipe-card__title">{recipe.title}</span>
        {savedRecipes.some((rec) => rec.id === recipe.id) ? (
          <span
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_SAVED", payload: recipe })
            }
          >
            <MdBookmark className="recipe-card__icon" />
          </span>
        ) : (
          <span
            onClick={() => dispatch({ type: "ADD_TO_SAVED", payload: recipe })}
          >
            <MdBookmarkBorder className="recipe-card__icon" />
          </span>
        )}
        {recipe.isUserAdded && <span>your recipe</span>}
      </div>
    </div>
  );
}
