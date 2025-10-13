import React from "react";

const CartsList = ({ cart }) => {
  return (
    <div>
      <ul>
        <li>장바구니 : {cart.id}</li>
      </ul>
    </div>
  );
};

export default CartsList;
