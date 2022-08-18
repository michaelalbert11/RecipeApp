import React, { useState } from "react";
import "./RecipeList.style.scss";
import RecipeCard from "../RecipeCard/RecipeCard.component";
import Filter from "../Filter/Filter.component";
import { RecipeListState } from "../../context/RecipeList.context";
export default function RecipeList() {
  const { state } = RecipeListState();
  const [filteredList, setFilteredList] = useState(state.recipeList);
  function handleOnSelect(event) {
    (event.target.innerText.toLowerCase() === "veg" &&
      setFilteredList(
        state.recipeList.filter((recipe) => recipe.vegetarian)
      )) ||
      (event.target.innerText.toLowerCase() === "non veg" &&
        setFilteredList(
          state.recipeList.filter((recipe) => !recipe.vegetarian)
        )) ||
      (event.target.innerText.toLowerCase() === "no filter" &&
        setFilteredList(state.recipeList));
  }
  return (
    <section>
      <Filter handleOnSelect={handleOnSelect} />
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
