export const SavedRecipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SAVED":
      return [...state, { ...action.payload }];
    case "REMOVE_FROM_SAVED":
      return state.filter((recipe) => recipe.id !== action.payload.id);
    default:
      return state;
  }
};
