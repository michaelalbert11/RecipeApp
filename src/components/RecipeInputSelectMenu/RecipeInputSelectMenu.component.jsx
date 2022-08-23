import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./RecipeInputSelectMenu.style.scss";
export default function RecipeInputSelectMenu(props) {
  const { options, handleOnSelect } = props;
  const [viewOptions, setViewOptions] = useState(false);
  return (
    <div className="select-menu">
      <button
        className="select-menu__btn"
        onClick={() => setViewOptions((prevState) => !prevState)}
        onBlur={() => setViewOptions(false)}
      >
        <span className="select-menu__btn-text">{props.condition()}</span>
        <MdArrowDropDown className="select-menu__btn-icon" />
      </button>

      {viewOptions && (
        <ul className="select-menu__options">
          {options.map((opt) => (
            <li
              onMouseDown={(event) => handleOnSelect(event)}
              className="select-menu__option"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
