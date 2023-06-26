import React from "react";
import "./Categories.scss";
import Sort from "../Sort";
import { SearchContext } from "../../App";

const Categories = ({}) => {
  const { setSearchValue, searchValue } = React.useContext(SearchContext);
  return (
    <div className="categories">
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Поиск..."
      ></input>

      <Sort></Sort>
    </div>
  );
};

export default Categories;
