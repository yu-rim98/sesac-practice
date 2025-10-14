import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getProductDetail(productId) {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
    }

    getProductDetail(productId);
  }, [productId]);
  return (
    <div>
      <h2>상품 상세</h2>
      <div>
        <p>상품명 : {product.title}</p>
        <p>설명 : {product.description}</p>
        <p>카테고리 : {product.category}</p>
        <img src={product?.images?.[0]} alt={product?.title || "상품 이미지"} />
      </div>
    </div>
  );
};

export default ProductDetail;
