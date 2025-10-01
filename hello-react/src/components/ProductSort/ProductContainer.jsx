import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Product from "./Product";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const isInitialMount = useRef(true); // 컴포넌트의 생애주기 동안 값을 유지할 수 있음

  useEffect(() => {
    console.log("최초 마운트 시 실행");
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data.products;
      setProducts(data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    console.log("값 변경 시 실행 ");
    const sortProducts = [...products];
    if (orderBy === "asc") {
      sortProducts.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      sortProducts.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    setProducts(sortProducts);
  }, [sortBy, orderBy]);

  const handleClick = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setSortBy(name);
    setOrderBy(value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handleClick}
          name="id"
          value="asc"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ID ↑
        </button>
        <button
          onClick={handleClick}
          name="id"
          value="desc"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ID ↓
        </button>
        <button
          onClick={handleClick}
          name="price"
          value="asc"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          가격 ↑
        </button>
        <button
          onClick={handleClick}
          name="price"
          value="desc"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          가격 ↓
        </button>
        <button
          onClick={handleClick}
          name="rating"
          value="asc"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          평점 ↑
        </button>
        <button
          onClick={handleClick}
          name="rating"
          value="desc"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          평점 ↓
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductContainer;
