import { useState } from "react";
import "./Filter.style.scss";
import { MdCircle, MdArrowDropDown } from "react-icons/md";
export default function Filter(props) {
  const { handleOnClick } = props;
  const [filterState, setFilterState] = useState({
    selectedOption: "no filter",
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
            className="filter__option flex-centerd-btw"
            onMouseDown={(event) => {
              setCurrentOption(event);
              handleOnClick("default");
            }}
          >
            <span>no filter</span>
          </li>
          <li
            className="filter__option flex-centerd-btw"
            onMouseDown={(event) => {
              setCurrentOption(event);
              handleOnClick("veg");
            }}
          >
            <span>veg</span>
            <MdCircle
              style={{ color: "green" }}
              className="filter__option-icon"
            />
          </li>
          <li
            className="filter__option flex-centerd-btw"
            onMouseDown={(event) => {
              setCurrentOption(event);
              handleOnClick("nonveg");
            }}
          >
            <span>non veg</span>
            <MdCircle
              style={{ color: "red" }}
              className="filter__option-icon"
            />
          </li>
        </ul>
      )}
    </div>
  );
}
