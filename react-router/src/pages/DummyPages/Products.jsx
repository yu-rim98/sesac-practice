import React, { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

// sortBy 와 order 쿼리 파라미터로 정렬을 구현한다
// Products 컴포넌트에 아래와 같은 정렬 버튼을 추가한다
// 상품 가격(price) 오름차순 : price, asc
// 상품 가격(price) 내림차순 : price, desc
// 상품 ID(id) 오름차순 : id, asc
// 상품 ID(id) 내림차순 : id, desc
const Products = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";
  const skip = searchParams.get("skip") || 0;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const getProducts = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=5&skip=${skip}&sortBy=${sortBy}&order=${order}`
    );
    const data = response.data;
    setProducts(data.products);
    console.log(data.products);
  };

  const clickId = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setSearchParams({ sortBy: "id", order: newOrder });
  };
  const clickPrice = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setSearchParams({ sortBy: "price", order: newOrder });
  };

  const idButtonText =
    sortBy === "id" && order === "asc" ? "내림차순" : "오름차순";
  const priceButtonText =
    sortBy === "price" && order === "asc" ? "내림차순" : "오름차순";

  return (
    <div>
      <h2>상품 목록</h2>
      <p>
        정렬 기준 : {sortBy} | 정렬 순서 : {order}
      </p>

      <button
        onClick={() => {
          setSearchParams({
            skip: Number(skip) - 5,
            order,
            sortBy,
          });
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          setSearchParams({
            skip: Number(skip) + 5,
            order,
            sortBy,
          });
        }}
      >
        다음
      </button>

      <br />

      <button onClick={clickId}>상품 ID {idButtonText}</button>
      <button onClick={clickPrice}>가격 {priceButtonText}</button>

      {products.map((product) => (
        <Link key={product.id} to={`/dummy/products/${product.id}`}>
          <ProductsList product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
