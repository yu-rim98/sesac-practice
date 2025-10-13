import React, { useEffect, useState } from "react";
import CartsList from "../components/CartsList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    getCarts();
  }, []);

  const getCarts = async () => {
    const response = await axios.get("https://dummyjson.com/carts");
    const data = response.data;
    setCarts(data.carts);
    console.log(data.carts);
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
      <h2>장바구니 목록</h2>
      {carts.map((cart) => (
        <CartsList key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default Carts;
