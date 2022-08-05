import RecipeCard from "../../components/RecipeCard/RecipeCard.component";
import { RecipeListContext } from "../../App";
import { CategoryState } from "../../context/Category.context";
import { useContext } from "react";
import "../template.style.scss";
export default function Categories() {
  const { recipeList } = useContext(RecipeListContext);
  const { category } = CategoryState();
  const newList = recipeList.filter((recipe) =>
    recipe.dishTypes.includes(category)
  );
  return (
    <section className="template container">
      <h1 className="template__heading">{category.replace("||", "or")}</h1>
      <div className="template-card__grid">
        {newList.length >= 1
          ? newList.map((recipe) => (
              <RecipeCard
                className="template-card__grid-item"
                key={recipe.id}
                recipe={recipe}
              />
            ))
          : `No ${category}s`}
      </div>
    </section>
  );
}
