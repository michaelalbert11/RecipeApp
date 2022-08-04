import React, { useContext, useState } from "react";
const SearchContextProvider = React.createContext();
export default function SearchContext({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContextProvider.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContextProvider.Provider>
  );
}

export const SearchState = () => {
  return useContext(SearchContextProvider);
};
