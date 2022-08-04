export const CategoryReducer = (state, action) => {
  console.log(state, "reducer state");
  switch (action.type) {
    case "main course":
      return state.filter((recipe) => recipe.dishTypes === "main course");
    default:
      return state;
  }
};
