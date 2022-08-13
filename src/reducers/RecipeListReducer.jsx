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
    default:
      return state;
  }
};
