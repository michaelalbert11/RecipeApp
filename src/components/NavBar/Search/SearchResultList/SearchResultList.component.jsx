import { RecipeListState } from "../../../../context/RecipeList.context";
import "./SearchResultList.style.scss";
import { RecipeSelectState } from "../../../../context/RecipeSelect.context";
export let searchResultList = [];
export default function SearchResultList(props) {
  const { searchValue } = props;
  const { state } = RecipeListState();
  const { setRecipeId } = RecipeSelectState();
  searchResultList = state.recipeList.filter(
    (recipe) =>
      recipe.title
        .split(" ")[0]
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      recipe.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      recipe.dishTypes
        .join(" ")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
  );
  return (
    <ul className="navbar__search-result-list">
      {searchResultList.length > 0 ? (
        searchResultList.map((recipe) => (
          <li
            className="navbar__search-result-list-item"
            onMouseDown={() => setRecipeId(recipe.id)}
            key={recipe.id}
          >
            {recipe.title}
          </li>
        ))
      ) : (
        <li className="navbar__search-result-list-not navbar__search-result-list-item">
          No results found
        </li>
      )}
    </ul>
  );
}
