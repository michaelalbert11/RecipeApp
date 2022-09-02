import "./RecipeInput.style.scss";
import {
  CurrentRecipeState,
  sampleRecipe,
} from "../../context/CurrentRecipe.context";
import IngredientInput from "../IngredientInput/IngredientInput.component";
import InstructionInput from "./InstructionInput.component";
import RecipeInputSelectMenu from "../RecipeInputSelectMenu/RecipeInputSelectMenu.component";
import { ToastContainer, toast } from "react-toastify";
export default function RecipeInput(props) {
  const {
    currentRecipe,
    setCurrentRecipe,
    handleRecipeChange,
    handleIngredientAdd,
    handleInstructionAdd,
  } = CurrentRecipeState();
  const { title, handler, action, notification } = props;

  const Ingredients = currentRecipe.extendedIngredients.map((ingredient) => (
    <IngredientInput
      notify={(message) => notifyDelete(message)}
      ingredient={ingredient}
    />
  ));

  function handleRecipeTypeSelect(event) {
    (event.target.innerText === "veg" &&
      setCurrentRecipe((prevState) => ({ ...prevState, vegetarian: true }))) ||
      (event.target.innerText === "non veg" &&
        setCurrentRecipe((prevState) => ({ ...prevState, vegetarian: false })));
  }

  function handelRecipeCategorySelect(event) {
    const category = event.target.innerText;
    switch (category) {
      case "main course":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "side dish":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "salad":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "soup":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "bread":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "dessert":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "snack":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;
      case "drink":
        setCurrentRecipe((prevState) => ({
          ...prevState,
          dishTypes: [category],
        }));
        break;

      default:
        break;
    }
  }
  const notifyAdd = (message) => toast.success(message);
  const notifyDelete = (message) => toast.error(message);

  const notifyRecipeAdd = (message) =>
    toast.warning(message, {
      position: "top-center",
      autoClose: 1000,
    });
  return (
    <section className="recipe-input">
      <div className="container">
        <h1 className="recipe-input__title">{title}</h1>
        <main className="recipe-input__body">
          <div className="recipe-input__recipe-fields">
            <div className="recipe-input__field-box">
              <input
                id="title"
                name="title"
                className="recipe-input__field-input"
                type="text"
                value={currentRecipe.title}
                placeholder="recipe name : beef soup"
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>
            <div className="recipe-input__field-row">
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <input
                  id="cook-time"
                  name="readyInMinutes"
                  className="recipe-input__field-input"
                  type="text"
                  placeholder="cook time : 40 min"
                  value={currentRecipe.readyInMiuntes}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
              <div className="recipe-input__field-box recipe-input__field-box--md">
                <input
                  id="servings"
                  name="servings"
                  placeholder="servings : 3"
                  className="recipe-input__field-input"
                  type="text"
                  value={currentRecipe.servings}
                  onChange={(event) => handleRecipeChange(event)}
                />
              </div>
            </div>
            <div
              style={{ marginBottom: "20px" }}
              className="recipe-input__field-box"
            >
              <input
                id="image"
                name="image"
                className="recipe-input__field-input"
                type="text"
                placeholder="image url : www.gallery.com/photo-12321"
                value={currentRecipe.image}
                onChange={(event) => handleRecipeChange(event)}
              />
            </div>

            <div className="recipe-input__field-row">
              <RecipeInputSelectMenu
                options={["veg", "non veg"]}
                handleOnSelect={(event) => handleRecipeTypeSelect(event)}
                condition={() => (currentRecipe.vegetarian ? "veg" : "non veg")}
              />
              <RecipeInputSelectMenu
                options={[
                  "main course",
                  "side dish",
                  "salad",
                  "soup",
                  "bread",
                  "dessert",
                  "snack",
                  "drink",
                ]}
                handleOnSelect={(event) => {
                  handelRecipeCategorySelect(event);
                }}
                condition={() => currentRecipe.dishTypes}
              />
            </div>

            <div className="recipe-input__instruction-fields">
              {currentRecipe.analyzedInstructions[0].steps.map((step) => (
                <InstructionInput
                  notify={(message) => notifyDelete(message)}
                  instruction={step}
                />
              ))}
            </div>
          </div>
          <div className="recipe-input__ingredient-fields">{Ingredients}</div>
        </main>
        <footer className="recipe-input__footer">
          <button
            className="recipe-input__btn recipe-input__btn--main"
            onClick={() => {
              setCurrentRecipe(sampleRecipe);
              notifyRecipeAdd(notification);
            }}
            onMouseDown={() => handler()}
          >
            {action}
          </button>
          <div className="flex-center">
            <button
              className="recipe-input__btn"
              onClick={handleInstructionAdd}
              onMouseDown={() => notifyAdd("added \n instruction field")}
            >
              add instruction
            </button>
            <button
              className="recipe-input__btn"
              onClick={handleIngredientAdd}
              onMouseDown={() => notifyAdd("added \n ingredient field")}
            >
              Add ingredient
            </button>
          </div>
        </footer>
      </div>
      <ToastContainer
        theme="dark"
        position="top-center"
        hideProgressBar
        autoClose={800}
        closeOnClick={false}
      />
    </section>
  );
}
