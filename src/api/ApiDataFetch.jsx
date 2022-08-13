import { useEffect } from "react";
import { RecipeListState } from "../context/RecipeList.context";
export default function ApiDataFetch() {
  // const { dispatch } = RecipeListState();
  // useEffect(() => {
  //   fetch(
  //     "https://api.spoonacular.com/recipes/random?apiKey=ebea031fb63040498bef29db8a70d404&number=100"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "FETCH_SUCCESS",
  //         payload: data.recipes,
  //       });
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: "FETCH_ERROR",
  //       });
  //     });
  // }, []);

  return null;
}
