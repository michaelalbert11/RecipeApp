import "./RecipeList.style.scss";
import RecipeCard from "../RecipeCard/RecipeCard.component";
import Filter from "../Filter/Filter.component";
import { toast } from "react-toastify";
import { RecipeListState } from "../../context/RecipeList.context";
export default function RecipeList() {
  const { state, filter } = RecipeListState();
  // const [filteredList, setFilteredList] = useState(state.recipeList);
  // console.log(filteredList);
  function RecList() {
    let data = [...state.recipeList];
    if (filter.veg) {
      data = data.filter((recipe) => recipe.vegetarian);
    }
    if (filter.nonveg) {
      data = data.filter((recipe) => !recipe.vegetarian);
    }
    if (filter.noFilter) {
      data = state.recipeList;
    }
    return data;
  }
  const notifyAdd = (message) => toast.success(message);
  const notifyDelete = (message) => toast.error(message);

  return (
    <section style={{ paddingBottom: "4em" }}>
      <Filter />
      <div className="recipe-card__grid">
        {RecList().map((recipe) => (
          <RecipeCard
            className="recipe-card__grid-item"
            key={recipe.id}
            recipe={recipe}
            notifyAdd={(message) => notifyAdd(message)}
            notifyDelete={(message) => notifyDelete(message)}
          />
        ))}
      </div>
    </section>
  );
}
