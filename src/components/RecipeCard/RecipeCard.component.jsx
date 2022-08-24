import "./RecipeCard.style.scss";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { SavedRecipesState } from "../../context/SavedRecipes.context";
import { ToastContainer, toast } from "react-toastify";
export default function RecipeCard({ recipe }) {
  const { savedRecipes, dispatch } = SavedRecipesState();
  const notifyAdd = (message) => toast.success(message);
  const notifyDelete = (message) => toast.error(message);
  return (
    <div className="recipe-card">
      <img
        className="recipe-card__image"
        src={
          recipe.image === undefined
            ? "https://spoonacular.com/recipeImages/631888-556x470.jpg"
            : recipe.image
        }
        alt={recipe.title}
      />
      <div className="recipe-card__overlay">
        <span className="recipe-card__title">{recipe.title}</span>
        {savedRecipes.some((rec) => rec.id === recipe.id) ? (
          <span
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_SAVED", payload: recipe });
              notifyDelete("Removed");
            }}
          >
            <MdBookmark className="recipe-card__icon" />
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch({ type: "ADD_TO_SAVED", payload: recipe });
            }}
            onMouseDown={() => notifyAdd("Saved")}
          >
            <MdBookmarkBorder className="recipe-card__icon" />
          </span>
        )}
        {recipe.isUserAdded && <span>your recipe</span>}
      </div>
      <ToastContainer
        position="top-center"
        theme="dark"
        closeOnClick={false}
        autoClose={800}
        hideProgressBar
      />
    </div>
  );
}
