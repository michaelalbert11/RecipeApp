import { RecipeListState } from "../../../../context/RecipeList.context";
import "./SearchResultList.style.scss";
export let searchResultList = [];
export default function SearchResultList(props) {
  const { searchValue } = props;
  const { state } = RecipeListState();
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
          <li className="navbar__search-result-list-item" key={recipe.id}>
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
