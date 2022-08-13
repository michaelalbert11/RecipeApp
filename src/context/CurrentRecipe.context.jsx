import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const CurrentRecipeContext = React.createContext();
export default function CurrentRecipe({ children }) {
  const sampleRecipe = {
    id: uuidv4(),
    title: "",
    readyInMinutes: 0,
    servings: 0,
    image: "",
    instructions: "",
    extendedIngredients: [
      {
        id: uuidv4(),
        name: "",
        amount: "",
        unit: "",
      },
    ],
    isUserAdded: true,
  };
  const [currentRecipe, setCurrentRecipe] = useState(sampleRecipe);
  console.log(currentRecipe);

  function handleRecipeChange(event) {
    setCurrentRecipe({
      ...currentRecipe,
      [event.target.name]: event.target.value,
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
  function handleIngredientChange(event, ingredient) {
    const newIngredient = [...currentRecipe.extendedIngredients];
    const index = newIngredient.findIndex((i) => i.id === ingredient.id);
    newIngredient[index] = {
      ...ingredient,
      [event.target.name]: event.target.value,
    };
    setCurrentRecipe({ ...currentRecipe, extendedIngredients: newIngredient });
  }
  function handleIngredientDelete(id) {
    setCurrentRecipe((prevState) => ({
      ...prevState,
      extendedIngredients: prevState.extendedIngredients.filter(
        (ing) => ing.id !== id
      ),
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
