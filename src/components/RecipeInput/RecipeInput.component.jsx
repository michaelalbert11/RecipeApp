import "./RecipeInput.style.scss";
import {
  CurrentRecipeState,
  sampleRecipe,
} from "../../context/CurrentRecipe.context";
import IngredientInput from "./IngredientInput.component";
import { RecipeListState } from "../../context/RecipeList.context";
import InstructionInput from "./InstructionInput.component";
export default function RecipeInput(props) {
  const {
    currentRecipe,
    setCurrentRecipe,
    handleRecipeChange,
    handleRecipeChange2,
    handleIngredientAdd,
    handleInstructionAdd,
  } = CurrentRecipeState();
  const Ingredients = currentRecipe.extendedIngredients.map((ingredient) => (
    <IngredientInput ingredient={ingredient} />
  ));
  console.log(sampleRecipe, "sampleRecipe");
  const { title } = props;
  const { dispatch } = RecipeListState();
  return (
    <section className="recipe-input">
      <div className="container">
        <h1 className="recipe-input__title">{title}</h1>
        <main className="recipe-input__body">
          <div className="recipe-input__recipe-fields">
            <div className="recipe-input__field-box">
              <input
                id="title"
                name="title"
                className="recipe-input__field-input"
                type="text"
                value={currentRecipe.title}
                placeholder="recipe name"
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>
            <div className="recipe-input__field-row">
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <input
                  id="cook-time"
                  name="readyInMinutes"
                  className="recipe-input__field-input"
                  type="text"
                  placeholder="cook time"
                  value={currentRecipe.readyInMiuntes}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <input
                  id="servings"
                  name="servings"
                  placeholder="servings"
                  className="recipe-input__field-input"
                  type="text"
                  value={currentRecipe.servings}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
            </div>
            <div className="recipe-input__field-row">
              <div className="recipe-input__field-box">
                <input
                  id="image"
                  name="image"
                  className="recipe-input__field-input"
                  type="text"
                  placeholder="image url"
                  value={currentRecipe.image}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
              <div className="recipe-input__field-box">
                <input
                  id="image"
                  name="dishTypes"
                  className="recipe-input__field-input"
                  type="text"
                  placeholder="recipe category"
                  value={currentRecipe.dishTypes.join(",")}
                  onChange={(event) => handleRecipeChange2(event)}
                />
              </div>
            </div>
            <div className="recipe-input__instruction-fields">
              {currentRecipe.analyzedInstructions[0].steps.map((step) => (
                <InstructionInput instruction={step} />
              ))}
            </div>
          </div>
          <div className="recipe-input__ingredient-fields">{Ingredients}</div>
        </main>
        <footer className="recipe-input__footer">
          <button
            className="recipe-input__btn recipe-input__btn--main"
            onClick={() =>
              dispatch({ type: "ADD RECIPE", payload: currentRecipe })
            }
          >
            Add Recipe
          </button>
          <div className="flex-center">
            <button className="recipe-input__btn" onClick={handleIngredientAdd}>
              Add ingredient
            </button>

            <button
              className="recipe-input__btn"
              onMouseDown={() => setCurrentRecipe(sampleRecipe)}
              onClick={handleInstructionAdd}
            >
              add instruction
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
