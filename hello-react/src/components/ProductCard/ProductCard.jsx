import React from "react";

const ProductCard = ({ product }) => {
  const tags = product.tags.map((tag) => {
    return tag;
  });

  return (
    <div>
      <div className="border rounded-lg p-4 shadow-md">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.inStock ? "재고 있음" : "품절"}</p>
        <p>{product.rating}</p>
        <div>{tags}</div>
      </div>
    </div>
  );
};

export default ProductCard;
