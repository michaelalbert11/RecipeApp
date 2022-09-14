import { useState, Fragment } from "react";
import "./RecipeView.style.scss";
import { RecipeSelectState } from "../../context/RecipeSelect.context";
import { RecipeListState } from "../../context/RecipeList.context";
import { SavedRecipesState } from "../../context/SavedRecipes.context";
import { toast } from "react-toastify";
import RecipeInput from "../RecipeInput/RecipeInput.component";
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
export default function RecipeView() {
  const [viewRecipeEdit, setViewRecipeEdit] = useState();
  const { currentRecipe, setCurrentRecipe } = CurrentRecipeState();
  const { recipeId, setRecipeId } = RecipeSelectState();
  const { state, dispatch: stateDispatch } = RecipeListState();
  const { savedRecipes, dispatch } = SavedRecipesState();

  const recipe = state.recipeList.find((recipe) => recipe.id === recipeId);
  console.log(recipe, recipeId, state.recipeList, viewRecipeEdit);
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
              src={
                recipe.image === "" || undefined
                  ? "https://spoonacular.com/recipeImages/631888-556x470.jpg"
                  : recipe.image
              }
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
                      setViewRecipeEdit(true);
                    }}
                    className="recipe-view__save-btn"
                  >
                    <MdCreate />
                  </span>
                )}
                {recipe.isUserAdded && (
                  <span
                    onClick={() => {
                      stateDispatch({ type: "DELETE_RECIPE", id: recipe.id });
                      setRecipeId(undefined);
                      notifyDelete("recipe deleted");
                      savedRecipes.some((rec) => rec.id === recipe.id) &&
                        dispatch({
                          type: "REMOVE_FROM_SAVED",
                          payload: recipe,
                        });
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

        {viewRecipeEdit && (
          <section
            className="recipe-input-section"
            style={{
              zIndex: "300",
              backgroundColor: "hsl(0,0%,7%)",
              height: "100vh",
              position: "fixed",
              width: "100vw",
              top: "0",
              left: "0",
              marginTop: "0",
              display: "grid",
              placeItems: "center",
              backgroundImage:
                ' url("../../assets/—Pngtree—hand drawn fast food doodle_5280161.png")',
              backgroundPosition: " center",
              backgroundRepeat: " repeat-x",
              backgroundSize: "500px",
            }}
          >
            <span
              onClick={() => setViewRecipeEdit(false)}
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                color: "red",
                fontSize: "1.3rem",
              }}
            >
              <MdClear />
            </span>
            <RecipeInput
              action={"save recipe"}
              handler={() =>
                stateDispatch({
                  type: "SAVE_EDITED_RECIPE",
                  payload: currentRecipe,
                })
              }
              title={"edit recipe"}
              notification={"recipe saved"}
            />
          </section>
        )}
      </div>
    </section>
  );
}
