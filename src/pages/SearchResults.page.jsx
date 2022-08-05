import React from "react";
import { searchResultList } from "../components/NavBar/Search/SearchResultList/SearchResultList.component";
import { SearchState } from "../context/SearchContext.context";
export default function SearchResults() {
  const { searchValue } = SearchState();

  return (
    <div>
      <div>showing results for {searchValue}</div>
      {searchResultList.map((recipe) => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
}
