import React, { useState } from "react";
import SearchInput from "./SearchInput/SearchInput.component";
import SearchResultList from "./SearchResultList/SearchResultList.component";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
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
