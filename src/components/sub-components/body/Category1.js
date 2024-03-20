import Title from "./Title.js";

const Category1 = (props) => {
  const { prodData } = props;
  return (
   <div className="comp1">
    <a href={prodData.productLink}>
      <img className="pic" src={prodData.formattedImageUrl} >
      </img>
    </a>
    <span className="title">{ prodData.title }</span>
    <span className="price">{ prodData.formattedPriceV2 }</span>
    <span className="rating">{ prodData.ratingValue }</span>
    <span className="brand">{prodData.brand}</span>
   </div>
  )
}

export default Category1;