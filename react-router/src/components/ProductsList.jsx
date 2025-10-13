import React from "react";

const ProductsList = ({ product }) => {
  return (
    <div>
      <ul>
        <li>상품명 : {product.title}</li>
      </ul>
    </div>
  );
};

export default ProductsList;
