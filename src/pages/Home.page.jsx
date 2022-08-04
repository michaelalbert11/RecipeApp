import RecipeList from "../components/RecipeList/RecipeList.component";
import Category from "../components/Category/Category.component";
export default function Home() {
  return (
    <main>
      <div className="container">
        <Category />
        <RecipeList />
      </div>
    </main>
  );
}
