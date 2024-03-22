import { useState } from "react";
import prodObj from "../../../config/mockdata.js";

// Passing filtering function as prop.
const Search = ({objMap, setObj}) => {
  const [ searchInput, setInput ] = useState("");
  return (
    <div className="search">
      <input className="search-box" type="text" value={searchInput} onChange={(e) => {
        setInput(e.target.value)
      }}>
      </input>
      <button onClick={
        () => {
          const searchResult = prodObj.slice(0, 10).filter(
            (products) => {
             return products.title.toLowerCase().includes(searchInput.toLowerCase());
            }
          );
          console.log(searchResult);
          setObj(searchResult);
         }
      }>
      Search</button>
    </div>
  );
}

export default Search;