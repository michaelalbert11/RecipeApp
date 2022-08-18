import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SearchInput.style.scss";
export default function SearchInput(props) {
  const { searchValue, handleOnChange, showResults, hideResults } = props;
  return (
    <div className="navbar__search-input-box">
      <input
        onFocus={showResults}
        onBlur={hideResults}
        className="navbar__search-input"
        type="text"
        value={searchValue}
        placeholder="Ex chicken bbq , chocolate cake "
        onChange={(event) => handleOnChange(event)}
      />
      <span>
        <Link to={`search${searchValue}`}>
          <FaSearch className="navbar__search-icon" />
        </Link>
      </span>
    </div>
  );
}
