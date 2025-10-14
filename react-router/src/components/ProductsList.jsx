import React from "react";

const ProductsList = ({ product }) => {
  return (
    <div>
      <ul>
        <li>상품 Id : {product.id}</li>
        <li>상품명 : {product.title}</li>
        <li>가격 : {product.price}</li>
      </ul>
    </div>
  );
};

export default ProductsList;
