export const RecipeListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        recipeList: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        recipeList: [],
        error: "something Went Wrong",
      };
    case "ADD RECIPE":
      return {
        recipeList: [...state.recipeList, action.payload],
      };
    case "DELETE_RECIPE":
      return {
        recipeList: state.recipeList.filter(
          (recipe) => recipe.id !== action.id
        ),
      };
    case "SAVE_EDITED_RECIPE":
      const newList = [...state.recipeList];
      const index = newList.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      newList[index] = action.payload;
      return {
        recipeList: newList,
      };
    default:
      return state;
  }
};
