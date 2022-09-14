import { useState } from "react";
import "./Filter.style.scss";
import { MdArrowDropDown } from "react-icons/md";
import { RecipeListState } from "../../context/RecipeList.context";
export default function Filter() {
  const { setFilter } = RecipeListState();
  const [filterState, setFilterState] = useState({
    selectedOption: "No Filter",
    optionActive: false,
  });

  function setCurrentOption(event) {
    setFilterState((prevState) => ({
      ...prevState,
      selectedOption: event.target.innerText,
    }));
    event.stopPropagation();
    console.log("option", filterState.selectedOption);
  }

  return (
    <div className="filter">
      <button
        className="filter__btn flex-centerd-btw"
        onClick={() =>
          setFilterState((prevState) => ({
            ...prevState,
            optionActive: !prevState.optionActive,
          }))
        }
        onBlur={() =>
          setFilterState((prevState) => ({ ...prevState, optionActive: false }))
        }
      >
        <span>{filterState.selectedOption}</span>
        <MdArrowDropDown className="filter__btn-icon" />
      </button>
      {filterState.optionActive && (
        <ul className="filter__options">
          <li
            className="filter__option "
            onMouseDown={(event) => {
              setCurrentOption(event);
              setFilter({ noFilter: true });
            }}
          >
            <span>no filter</span>
          </li>
          <li
            className="filter__option "
            onMouseDown={(event) => {
              setCurrentOption(event);
              setFilter({ veg: true });
            }}
          >
            <span>veg</span>
          </li>
          <li
            className="filter__option "
            onMouseDown={(event) => {
              setCurrentOption(event);
              setFilter({ nonveg: true });
            }}
          >
            <span>non veg</span>
          </li>
        </ul>
      )}
    </div>
  );
}
