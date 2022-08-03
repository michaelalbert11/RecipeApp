import React, { useContext } from "react";
import { RecipeListContext } from "../App";
import RecipeCard from "../components/RecipeCard/RecipeCard.component";
export const CategoryContext = React.createContext();
// export function MainCourse() {
//   const [filterString, setfilterString] = useState("");
//   const recipeList = useContext(RecipeListContext);
//   const filteredList = recipeList.filter((recipe) =>
//     recipe.dishTypes.includes(filterString)
//   );
//   // const CategoryContextValue = { filterArray };
//   // console.log(CategoryContext);
//   return (
//     // <CategoryContext.Provider value={CategoryContextValue}>
//     <section className="container">
//       <h1>MainCourse</h1>
//       <div className="recipe-card__grid">
//         {filteredList.map((recipe) => (
//           <RecipeCard
//             className="recipe-card__grid-item"
//             key={recipe.id}
//             recipe={recipe}
//           />
//         ))}
//       </div>
//     </section>
//     // </CategoryContext.Provider>
//   );
// }
export function SideDish() {
  const recipeList = useContext(RecipeListContext);
  const sideDishList = recipeList.filter((recipe) =>
    recipe.dishTypes.includes("side dish")
  );
  console.log("old", sideDishList.length);
  const newlist = sideDishList.filter((recipe) =>
    sideDishList.length % 2 === 0
      ? recipe
      : sideDishList.splice(sideDishList.indexOf(recipe), 1)
  );
  console.log("new", newlist.length, newlist);
  return (
    <section className="container">
      <h1>sideDishes</h1>
      <div className="recipe-card__grid">
        {sideDishList.map((recipe) => (
          <RecipeCard
            className="recipe-card__grid-item"
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </section>
  );
}
