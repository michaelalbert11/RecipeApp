import React, { useContext, useState } from "react";
const CategoryContext = React.createContext();
export default function Category({ children }) {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const CategoryState = () => {
  return useContext(CategoryContext);
};
