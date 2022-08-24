import { MdClear } from "react-icons/md";
import { CurrentRecipeState } from "../../context/CurrentRecipe.context";
export default function InstructionInput({ instruction, notify }) {
  const { handleInstructionChange, handleInstructionDelete } =
    CurrentRecipeState();
  return (
    <div className="recipe-input__field-box">
      <input
        className="recipe-input__field-input"
        type="text"
        value={instruction.step}
        onChange={(event) => handleInstructionChange(event, instruction)}
        placeholder="your instruction here"
      />
      <button
        className="recipe-input__btn-delete"
        onClick={() => {
          handleInstructionDelete(instruction.id);
          notify("removed \ninstruction field ");
        }}
      >
        <MdClear className="recipe-input__btn-delete-icon" />
      </button>
    </div>
  );
}
