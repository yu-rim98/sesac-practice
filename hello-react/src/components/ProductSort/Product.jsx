import React from "react";

const Product = ({ product }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between leading-normal">
      <div className="mb-4">
        <p className="text-gray-900 font-bold text-xl mb-2">{product.title}</p>
        <p className="text-sm text-gray-600">ID: {product.id}</p>
        <p className="text-gray-700 text-base mt-2">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
        <div className="text-sm">
          <p className="text-gray-900">Rating: {product.rating}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{product.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #{product.brand}
        </span>
      </div>
    </li>
  );
};

export default Product;
