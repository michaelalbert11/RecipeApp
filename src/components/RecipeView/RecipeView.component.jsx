import "./RecipeView.style.scss";
import { Fragment } from "react";
import { RecipeSelectState } from "../../context/RecipeSelect.context";
import { RecipeListState } from "../../context/RecipeList.context";
import { SavedRecipesState } from "../../context/SavedRecipes.context";
import { toast } from "react-toastify";
import { CurrentRecipeState } from "../../context/CurrentRecipe.context";
import {
  MdTimer,
  MdFiberManualRecord,
  MdClear,
  MdBookmark,
  MdBookmarkBorder,
  MdPersonOutline,
  MdCreate,
  MdDelete,
} from "react-icons/md";
export default function RecipeView({ recipeDelete, openRecipe }) {
  const { setCurrentRecipe } = CurrentRecipeState();
  const { recipeId, setRecipeId } = RecipeSelectState();
  const { state } = RecipeListState();
  const { savedRecipes, dispatch } = SavedRecipesState();
  const recipe = state.recipeList.find((recipe) => recipe.id === recipeId);
  console.log(recipe, recipeId, state.recipeList);
  const notifyAdd = (message) => toast.success(message);
  const notifyDelete = (message) => toast.error(message);

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="recipe-view__save-btn">
                {savedRecipes.some((rec) => rec.id === recipe.id) ? (
                  <span
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_SAVED", payload: recipe });
                      notifyDelete("Removed");
                    }}
                  >
                    <MdBookmark />
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      dispatch({ type: "ADD_TO_SAVED", payload: recipe });
                      notifyAdd("Added");
                    }}
                  >
                    <MdBookmarkBorder />
                  </span>
                )}
              </span>
              <div>
                {recipe.isUserAdded && (
                  <span
                    onClick={() => {
                      setCurrentRecipe(recipe);
                      openRecipe();
                    }}
                    className="recipe-view__save-btn"
                  >
                    <MdCreate />
                  </span>
                )}
                {recipe.isUserAdded && (
                  <span
                    onClick={() => {
                      recipeDelete({ type: "DELETE_RECIPE", id: recipe.id });
                      setRecipeId(undefined);
                      notifyDelete("recipe deleted");
                    }}
                    className="recipe-view__save-btn"
                  >
                    <MdDelete />
                  </span>
                )}
              </div>
            </div>
            <div className="recipe-view__recipe-info">
              <div className="recipe-view__recipe-info-bar">
                <MdTimer className="recipe-view__recipe-info-bar-icon" />
                <span className="recipe-view__recipe-info-bar-text">
                  {recipe.readyInMinutes} min
                </span>
              </div>
              <div className="recipe-view__recipe-info-bar">
                <MdPersonOutline className="recipe-view__recipe-info-bar-icon" />
                <span className="recipe-view__recipe-info-bar-text">
                  {recipe.servings > 1
                    ? recipe.servings + " adults"
                    : recipe.servings + " adult"}
                </span>
              </div>
              {recipe.vegetarian ? (
                <div className="recipe-view__recipe-info-bar">
                  <MdFiberManualRecord
                    style={{ color: "rgb(0,255,64)" }}
                    className="recipe-view__recipe-info-bar-icon"
                  />
                  <span className="recipe-view__recipe-info-bar-text">veg</span>
                </div>
              ) : (
                <div className="recipe-view__recipe-info-bar">
                  <MdFiberManualRecord
                    style={{ color: "tomato" }}
                    className="recipe-view__recipe-info-bar-icon"
                  />
                  <span className="recipe-view__recipe-info-bar-text">
                    non veg
                  </span>
                </div>
              )}
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
