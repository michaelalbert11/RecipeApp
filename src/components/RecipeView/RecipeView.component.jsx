import "./RecipeView.style.scss";
import { Fragment } from "react";
import { RecipeSelectState } from "../../context/RecipeSelect.context";
import { RecipeListState } from "../../context/RecipeList.context";
import {
  MdGridView,
  MdTimer,
  MdClear,
  // MdBookmark,
  // MdBookmarkBorder,
  MdPersonOutline,
} from "react-icons/md";
export default function RecipeView() {
  const { recipeId, setRecipeId } = RecipeSelectState();
  const { state } = RecipeListState();
  const recipe = state.recipeList.find((recipe) => recipe.id === recipeId);
  console.log(recipe, recipeId, state.recipeList);
  return (
    <section className="recipe-view__backdrop">
      <button className="close-btn" onClick={() => setRecipeId(undefined)}>
        <MdClear />
      </button>
      <div className="container recipe-view__container">
        <div className="recipe-view__recipe">
          <div className="recipe-view__recipe-image-backdrop">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-view__recipe-image"
            />
          </div>

          <div className="recipe-view__recipe-primary-container">
            <h1 className="recipe-view__recipe-title">{recipe.title}</h1>
            <div className="recipe-view__recipe-info">
              <div className="recipe-view__recipe-info-bar">
                <MdTimer className="recipe-view__recipe-info-bar-icon" />
                <span className="recipe-view__recipe-info-bar-text">
                  {recipe.readyInMinutes} minutes
                </span>
              </div>
              <div className="recipe-view__recipe-info-bar">
                <MdPersonOutline className="recipe-view__recipe-info-bar-icon" />
                <span className="recipe-view__recipe-info-bar-text">
                  {recipe.servings > 1
                    ? recipe.servings + " members"
                    : recipe.servings + " member"}
                </span>
              </div>
              <div className="recipe-view__recipe-info-bar">
                <MdGridView className="recipe-view__recipe-info-bar-icon" />
                <span className="recipe-view__recipe-info-bar-text">
                  {recipe.dishTypes.find(
                    (dish) =>
                      dish === "main course" ||
                      dish === "side dish" ||
                      dish === "salad" ||
                      dish === "soup" ||
                      dish === "bread" ||
                      dish === "dessert" ||
                      dish === "snack"
                  )}
                </span>
              </div>
            </div>
            <h3 className="recipe-view__sub-title">Ingredients</h3>
            <ul className="recipe-view__ingredients">
              {recipe.extendedIngredients.map((ins) => (
                <Fragment>
                  <li className="recipe-view__ingredient">{ins.name} </li>
                  <li className="recipe-view__ingredient">
                    {ins.amount + " " + ins.unit}
                  </li>
                </Fragment>
              ))}
            </ul>

            <h3 className="recipe-view__sub-title">Instructions</h3>
            <ol className="recipe-view__instructions">
              {recipe.analyzedInstructions[0] === undefined
                ? "none"
                : recipe.analyzedInstructions[0].steps.map((ins) => (
                    <li className="recipe-view__instruction">{ins.step} </li>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
