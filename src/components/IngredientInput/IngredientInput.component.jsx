import { MdClear } from "react-icons/md";
import { CurrentRecipeState } from "../../context/CurrentRecipe.context";
import "./IngredientInput.style.scss";
export default function IngredientInput({ ingredient }) {
  const { handleIngredientChange, handleIngredientDelete } =
    CurrentRecipeState();
  return (
    <div className="recipe-input__field-row">
      <div className="recipe-input__field-box--md">
        <input
          className="recipe-input__field-input"
          type="text"
          onChange={(event) => handleIngredientChange(event, ingredient)}
          name="name"
          placeholder="ingredient : sugar"
          value={ingredient.name}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div className="recipe-input__field-box--md">
          <input
            className="recipe-input__field-input"
            type="text"
            placeholder="amount : 1"
            onChange={(event) => handleIngredientChange(event, ingredient)}
            name="amount"
            value={ingredient.amount}
          />
        </div>
        <div className="recipe-input__field-box--md">
          <input
            className="recipe-input__field-input"
            type="text"
            onChange={(event) => handleIngredientChange(event, ingredient)}
            name="unit"
            placeholder="unit : spoon"
            value={ingredient.unit}
          />
        </div>
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
