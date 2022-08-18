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
        loading: false,
        recipeList: [...state.recipeList, action.payload],
        error: "",
      };
    default:
      return state;
  }
};
