import React, { useEffect } from "react";
import SavedRecipes from "../../context/SavedRecipes.context";
export default function Notification() {
  const { savedRecipes } = SavedRecipes();
  useEffect(() => {
    console.log("recipe saved");
  }, [savedRecipes]);
  return <div>Notification</div>;
}
