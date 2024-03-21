import Title from "./sub-components/body/Title";
import Category1 from "./sub-components/body/Category1";
import TodaysDeal from "./sub-components/body/TodaysDeal";
import Category2 from "./sub-components/body/Category2";
import Category3 from "./sub-components/body/Category3";
import Category4 from "./sub-components/body/Category4";
import Category5 from "./sub-components/body/Category5";
import prodObj from "../config/mockdata.js";
import { useState } from "react";

const Body = () => {
  const [ listOfProducts, setProducts ] = useState(prodObj.slice(0, 10));
  return (
    <div className="body-wrapper">
      <button className="top-products" onClick={() => {
        console.log(prodObj);
        const topProducts = listOfProducts.filter(
          (product) => product.ratingValue > 4.1
        );
        setProducts(topProducts);
      }}> Top Products
      </button>
      <div className="pick-up">
        <Title data="Pick up where you left off" />
        { listOfProducts.map(item => <Category1 prodData={item} />)}
      </div>
    </div>
  )
}

export default Body;