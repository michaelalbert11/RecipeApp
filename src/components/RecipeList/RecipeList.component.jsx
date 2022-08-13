import React, { useState } from "react";
import "./RecipeList.style.scss";
import RecipeCard from "../RecipeCard/RecipeCard.component";
import Filter from "../Filter/Filter.component";
import { RecipeListState } from "../../context/RecipeList.context";
export default function RecipeList() {
  const { state } = RecipeListState();
  const [filteredList, setFilteredList] = useState(state.recipeList);
  const vegList = state.recipeList.filter((recipe) => recipe.vegetarian);
  const nonVegList = state.recipeList.filter((recipe) => !recipe.vegetarian);
  function handleOnClick(value) {
    setFilteredList(
      (prevState) =>
        (value === "veg" && vegList) ||
        (value === "nonveg" && nonVegList) ||
        (value === "default" && state.recipeList)
    );
  }

  return (
    <section>
      <Filter handleOnClick={handleOnClick} />
      <div className="recipe-card__grid">
        {filteredList.map((recipe) => (
          <RecipeCard
            className="recipe-card__grid-item"
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </section>
  );
}
