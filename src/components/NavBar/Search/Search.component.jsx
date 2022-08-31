import SearchInput from "./SearchInput/SearchInput.component";
import SearchResultList from "./SearchResultList/SearchResultList.component";
import { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(false);

  function handleOnChange(event) {
    setSearchValue(event.target.value);
  }

  function showResults() {
    setSearchResult(true);
  }
  function hideResults() {
    setSearchResult(false);
  }
  return (
    <div className="navbar__search">
      <SearchInput
        searchValue={searchValue}
        handleOnChange={handleOnChange}
        showResults={showResults}
        hideResults={hideResults}
      />
      {searchResult && searchValue.length > 0 && (
        <SearchResultList searchValue={searchValue} />
      )}
      {/* {recipeId && <RecipeView recipeList={state.recipeList} />} */}
    </div>
  );
}
