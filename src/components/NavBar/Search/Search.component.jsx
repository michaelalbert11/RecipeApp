import SearchInput from "./SearchInput/SearchInput.component";
import SearchResultList from "./SearchResultList/SearchResultList.component";
import { SearchState } from "../../../context/SearchContext.context";
export default function Search() {
  const { searchValue, setSearchValue } = SearchState();
  console.log("searchValue", searchValue);
  function handleOnChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="navbar__search">
      <SearchInput searchValue={searchValue} handleOnChange={handleOnChange} />
      {searchValue.length > 0 && <SearchResultList searchValue={searchValue} />}
    </div>
  );
}
