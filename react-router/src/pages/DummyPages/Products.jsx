import React, { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
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
      <h2>상품 목록</h2>
      {products.map((product) => (
        <ProductsList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
