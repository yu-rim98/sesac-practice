import React, { useEffect, useState } from "react";
import CartsList from "../../components/CartsList";
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
      <h2>장바구니 목록</h2>
      {carts.map((cart) => (
        <CartsList key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default Carts;
