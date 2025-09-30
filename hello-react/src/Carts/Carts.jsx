import React from "react";
import Product from "./Product";

const Carts = () => {
  const carts = {
    id: 1,
    products: [
      {
        id: 168,
        title: "Charger SXT RWD",
        price: 32999.99,
        quantity: 3,
        total: 98999.97,
        discountPercentage: 13.39,
        discountedTotal: 85743.87,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
      },
      {
        id: 78,
        title: "Apple MacBook Pro 14 Inch Space Grey",
        price: 1999.99,
        quantity: 2,
        total: 3999.98,
        discountPercentage: 18.52,
        discountedTotal: 3259.18,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
      },
      {
        id: 183,
        title: "Green Oval Earring",
        price: 24.99,
        quantity: 5,
        total: 124.94999999999999,
        discountPercentage: 6.28,
        discountedTotal: 117.1,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
      },
      {
        id: 100,
        title: "Apple Airpods",
        price: 129.99,
        quantity: 5,
        total: 649.95,
        discountPercentage: 12.84,
        discountedTotal: 566.5,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
      },
    ],
    total: 103774.85,
    discountedTotal: 89686.65,
    userId: 33,
    totalProducts: 4,
    totalQuantity: 15,
  };
  console.log(carts);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">상품 목록</h1>
      <div className="flex flex-wrap gap-4">
        <Product product={carts.products[0]} />
        <Product product={carts.products[1]} />
        <Product product={carts.products[2]} />
        <Product product={carts.products[3]} />
      </div>
    </div>
  );
};

export default Carts;
