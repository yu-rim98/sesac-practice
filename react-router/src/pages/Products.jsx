import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    setProducts(data.products);
    console.log(data.products);
  };
  return (
    <div>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/")}
      >
        홈으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/products")}
      >
        상품 목록으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/carts")}
      >
        장바구니 목록으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/posts")}
      >
        게시판 목록으로 이동
      </button>

      <h2>상품 목록</h2>
      {products.map((product) => (
        <ProductsList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
