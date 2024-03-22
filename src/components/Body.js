import Title from "./sub-components/body/Title";
import Category1 from "./sub-components/body/Category1";
import TodaysDeal from "./sub-components/body/TodaysDeal";
import Category2 from "./sub-components/body/Category2";
import Category3 from "./sub-components/body/Category3";
import Category4 from "./sub-components/body/Category4";
import Category5 from "./sub-components/body/Category5";
import prodObj from "../config/mockdata.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ({objMap, setObj}) => {
  const [ listOfProducts, setProducts ] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const fetchData = () => {
    const list = prodObj.slice(0, 10);
    setProducts(list);
    setObj(list);
  };

  console.log('========in body==============');
  console.log(objMap);

  return (listOfProducts.length === 0) ? <Shimmer/> : (
    <div className="body-wrapper">
      <button className="top-products" onClick={() => {
        console.log(prodObj);
        const topProducts = listOfProducts.filter(
          (product) => product.ratingValue > 4.1
        );
        setProducts(topProducts);
        setObj(topProducts);
      }}> Top Products
      </button>
      <div className="pick-up">
        <Title data="Pick up where you left off" />
        { objMap.map(item => <Category1 prodData={item} />)}
      </div>
    </div>
  )
}

export default Body;