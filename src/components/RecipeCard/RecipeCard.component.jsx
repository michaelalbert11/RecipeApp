import "./RecipeCard.style.scss";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { SavedRecipesState } from "../../context/SavedRecipes.context";
import { RecipeSelectState } from "../../context/RecipeSelect.context";
import { FaUser } from "react-icons/fa";
export default function RecipeCard(props) {
  const { recipe, notifyAdd, notifyDelete } = props;
  const { savedRecipes, dispatch } = SavedRecipesState();
  const { setRecipeId } = RecipeSelectState();

  return (
    <div
      className="recipe-card"
      onClick={() => {
        setRecipeId(recipe.id);
      }}
    >
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
            onClick={(event) => {
              dispatch({ type: "REMOVE_FROM_SAVED", payload: recipe });
              notifyDelete("Removed");
              event.stopPropagation();
            }}
          >
            <MdBookmark className="recipe-card__icon" />
          </span>
        ) : (
          <span
            onClick={(event) => {
              dispatch({ type: "ADD_TO_SAVED", payload: recipe });
              notifyAdd("Saved");
              event.stopPropagation();
            }}
          >
            <MdBookmarkBorder className="recipe-card__icon" />
          </span>
        )}
        {recipe.isUserAdded && (
          <span className="recipe-card__user-icon">
            <FaUser style={{ color: "bisque" }} />
          </span>
        )}
      </div>
    </div>
  );
}
