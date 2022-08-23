import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const CurrentRecipeContext = React.createContext();
export const sampleRecipe = {
  id: uuidv4(),
  vegetarian: false,
  title: "",
  readyInMinutes: "",
  servings: "",
  image: "",
  dishTypes: ["main course"],
  analyzedInstructions: [
    {
      steps: [
        {
          id: uuidv4(),
          number: 1,
          step: "",
        },
        {
          id: uuidv4(),
          number: 2,
          step: "",
        },
        {
          id: uuidv4(),
          number: 3,
          step: "",
        },
      ],
    },
  ],
  extendedIngredients: [
    {
      id: uuidv4(),
      name: "",
      amount: "",
      unit: "",
    },
    {
      id: uuidv4(),
      name: "",
      amount: "",
      unit: "",
    },
  ],
  isUserAdded: true,
};
export default function CurrentRecipe({ children }) {
  const [currentRecipe, setCurrentRecipe] = useState(sampleRecipe);
  console.log(currentRecipe);

  function handleRecipeChange(event) {
    setCurrentRecipe({
      ...currentRecipe,
      [event.target.name]: event.target.value,
    });
  }

  function handleIngredientChange(event, ingredient) {
    const newIngredient = [...currentRecipe.extendedIngredients];
    const index = newIngredient.findIndex((i) => i.id === ingredient.id);
    newIngredient[index] = {
      ...ingredient,
      [event.target.name]: event.target.value,
    };
    setCurrentRecipe({ ...currentRecipe, extendedIngredients: newIngredient });
  }

  function handleInstructionChange(event, instruction) {
    const newInstrution = [...currentRecipe.analyzedInstructions[0].steps];
    const index = newInstrution.findIndex((ins) => ins.id === instruction.id);
    newInstrution[index] = { ...instruction, step: event.target.value };
    setCurrentRecipe({
      ...currentRecipe,
      analyzedInstructions: [
        {
          ...currentRecipe.analyzedInstructions[0],
          steps: newInstrution,
        },
      ],
    });
  }

  function handleIngredientAdd() {
    setCurrentRecipe((prevState) => ({
      ...prevState,
      extendedIngredients: [
        ...prevState.extendedIngredients,
        { id: uuidv4(), name: "", amount: "", unit: "" },
      ],
    }));
  }

  function handleInstructionAdd() {
    const newInstructions = [
      ...currentRecipe.analyzedInstructions[0].steps,
      {
        id: uuidv4(),
        number: currentRecipe.analyzedInstructions[0].steps.length + 1,
        step: "",
      },
    ];

    setCurrentRecipe((prevState) => ({
      ...prevState,
      analyzedInstructions: [
        {
          ...prevState.analyzedInstructions[0],
          steps: newInstructions,
        },
      ],
    }));
  }

  function handleIngredientDelete(id) {
    setCurrentRecipe((prevState) => ({
      ...prevState,
      extendedIngredients: prevState.extendedIngredients.filter(
        (ing) => ing.id !== id
      ),
    }));
  }

  function handleInstructionDelete(id) {
    setCurrentRecipe((prevState) => ({
      ...prevState,
      analyzedInstructions: [
        {
          ...prevState.analyzedInstructions[0],
          steps: prevState.analyzedInstructions[0].steps.filter(
            (step) => step.id !== id
          ),
        },
      ],
    }));
  }

  return (
    <CurrentRecipeContext.Provider
      value={{
        currentRecipe,
        setCurrentRecipe,
        handleRecipeChange,
        handleIngredientChange,
        handleIngredientAdd,
        handleInstructionChange,
        handleInstructionAdd,
        handleInstructionDelete,
        handleIngredientDelete,
      }}
    >
      {children}
    </CurrentRecipeContext.Provider>
  );
}

export const CurrentRecipeState = () => {
  return useContext(CurrentRecipeContext);
};
