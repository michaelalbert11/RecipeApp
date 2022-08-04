import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.style.scss";
export default function SearchInput(props) {
  const { searchValue, handleOnChange } = props;
  return (
    <div className="navbar__search-input-box">
      <input
        className="navbar__search-input"
        type="text"
        value={searchValue}
        onChange={(event) => handleOnChange(event)}
      />
      <span>
        <FaSearch className="navbar__search-icon" />
      </span>
    </div>
  );
}
