import { MdClear } from "react-icons/md";
import { CurrentRecipeState } from "../../context/CurrentRecipe.context";
export default function IngredientInput({ ingredient }) {
  const { handleIngredientChange, handleIngredientDelete } =
    CurrentRecipeState();
  return (
    <div className="recipe-input__field-row">
      <div className="recipe-input__field-box--md">
        {/* <label className="recipe-input__field-label" htmlFor="">
          name
        </label> */}
        <input
          className="recipe-input__field-input"
          type="text"
          onChange={(event) => handleIngredientChange(event, ingredient)}
          name="name"
          value={ingredient.name}
        />
      </div>
      <div className="recipe-input__field-box--md">
        {/* <label className="recipe-input__field-label" htmlFor="">
          amount
        </label> */}
        <input
          className="recipe-input__field-input"
          type="text"
          onChange={(event) => handleIngredientChange(event, ingredient)}
          name="amount"
          value={ingredient.amount}
        />
      </div>
      <div className="recipe-input__field-box--md">
        {/* <label className="recipe-input__field-label" htmlFor="">
          unit
        </label> */}
        <input
          className="recipe-input__field-input"
          type="text"
          onChange={(event) => handleIngredientChange(event, ingredient)}
          name="unit"
          placeholder="no unit"
          value={ingredient.unit}
        />
      </div>
      <button
        className="recipe-input__btn-delete"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        <MdClear className="recipe-input__btn-delete-icon" />
      </button>
    </div>
  );
}
