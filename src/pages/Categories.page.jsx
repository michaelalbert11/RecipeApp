import RecipeCard from "../components/RecipeCard/RecipeCard.component";
import { CategoryState } from "../context/Category.context";
import "./template.style.scss";
import { RecipeListState } from "../context/RecipeList.context";
import Filter from "../components/Filter/Filter.component";
import Banner from "../components/Banner/Banner.component";
import { toast } from "react-toastify";
export default function Categories() {
  const { state, filter } = RecipeListState();
  const { category } = CategoryState();
  const newList = state.recipeList.filter((recipe) =>
    recipe.dishTypes.includes(category)
  );
  function RecList() {
    let data = [...newList];
    if (filter.veg) {
      data = data.filter((recipe) => recipe.vegetarian);
    }
    if (filter.nonveg) {
      data = data.filter((recipe) => !recipe.vegetarian);
    }
    if (filter.noFilter) {
      data = newList;
    }
    return data;
  }
  const notifyAdd = (message) => toast.success(message);
  const notifyDelete = (message) => toast.error(message);

  return (
    <section className="template container">
      <Banner
        image={
          (category === "main course" &&
            "https://images.pexels.com/photos/11776375/pexels-photo-11776375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "side dish" &&
            "https://images.pexels.com/photos/8952662/pexels-photo-8952662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "salad" &&
            "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "soup" &&
            "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "bread" &&
            "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "dessert" &&
            "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
          (category === "snack" &&
            "https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600") ||
          (category === "drink" &&
            "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        }
        text={category.replace("||", "or")}
      />
      <Filter />
      <div className="template-card__grid">
        {RecList().length >= 1
          ? RecList().map((recipe) => (
              <RecipeCard
                className="template-card__grid-item"
                key={recipe.id}
                recipe={recipe}
                notifyAdd={(message) => notifyAdd(message)}
                notifyDelete={(message) => notifyDelete(message)}
              />
            ))
          : `No ${category}s`}
      </div>
    </section>
  );
}
