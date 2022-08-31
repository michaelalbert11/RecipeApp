import RecipeList from "../components/RecipeList/RecipeList.component";
import Category from "../components/Category/Category.component";
import Banner from "../components/Banner/Banner.component";

export default function Home() {
  return (
    <section>
      <div className="container">
        <Category />
        <Banner
          image={
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          text={"All of your favourite recipes at one spot "}
        />
        <RecipeList />
      </div>
    </section>
  );
}
