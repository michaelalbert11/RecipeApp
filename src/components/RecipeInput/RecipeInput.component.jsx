import React, { useContext } from "react";
import "./RecipeInput.style.scss";
import { CurrentRecipeState } from "../../context/CurrentRecipe.context";
import IngredientInput from "./IngredientInput.component";
import { RecipeListContext } from "../../App";
export default function RecipeInput() {
  const { currentRecipe, handleRecipeChange, handleIngredientAdd } =
    CurrentRecipeState();
  const Ingredients = currentRecipe.extendedIngredients.map((ingredient) => (
    <IngredientInput ingredient={ingredient} />
  ));
  const { handleRecipeAdd } = useContext(RecipeListContext);
  return (
    <section className="recipe-input">
      <div className="container">
        <header className="recipe-input__header">edit recipe</header>
        <main className="recipe-input__body">
          <div className="recipe-input__recipe-fields">
            <div className="recipe-input__field-box">
              <label htmlFor="title" className="recipe-input__field-label">
                name
              </label>
              <input
                id="title"
                name="title"
                className="recipe-input__field-input"
                type="text"
                value={currentRecipe.title}
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>
            <div className="recipe-input__field-row">
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <label
                  className="recipe-input__field-label"
                  htmlFor="cook-time"
                >
                  Cook time
                </label>
                <input
                  id="cook-time"
                  name="readyInMinutes"
                  className="recipe-input__field-input"
                  type="text"
                  value={currentRecipe.readyInMiuntes}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <label className="recipe-input__field-label" htmlFor="servings">
                  servings
                </label>

                <input
                  id="servings"
                  name="servings"
                  className="recipe-input__field-input"
                  type="text"
                  value={currentRecipe.servings}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
            </div>
            <div className="recipe-input__field-box">
              <label className="recipe-input__field-label" htmlFor="image">
                image url
              </label>

              <input
                id="image"
                name="image"
                className="recipe-input__field-input"
                type="text"
                value={currentRecipe.image}
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>
            <div className="recipe-input__field-box">
              <label
                className="recipe-input__field-label"
                htmlFor="instructions"
              >
                instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                className="recipe-input__field-input recipe-input__field-input-tex"
                rows="7"
                value={currentRecipe.instructions}
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>
          </div>
          <div className="recipe-input__ingredient-fields">
            {/* <h3 className="recipe-input__heading">ingredients</h3>
          <button onChange={handleAddIngredient}>Add </button> */}
            <div className="recipe-input__ingredient-heading">
              <label className="recipe-input__field-label">Ingredient</label>
              <label className="recipe-input__field-label">amount</label>
              <label className="recipe-input__field-label">unit</label>
            </div>
            {Ingredients}
          </div>
        </main>
        <footer className="recipe-input__footer">
          {/* <button onClick={handleAddRecipe} name="add">
          Add
        </button> */}

          <button
            className="recipe-input__btn"
            onClick={() => handleRecipeAdd(currentRecipe)}
          >
            Add Recipe
          </button>
          <button
            className="recipe-input__btn"
            onClick={handleIngredientAdd}
            name="add"
          >
            Add a ingredient
          </button>
        </footer>
      </div>
    </section>
  );
}
