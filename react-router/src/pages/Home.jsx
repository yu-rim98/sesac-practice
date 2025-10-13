import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/dummy/products" className="border-2 border-orange-600 mr-3">
        상품 목록
      </Link>

      <Link to="/dummy/carts" className="border-2 border-orange-600 mr-3">
        장바구니 목록
      </Link>

      <Link to="/dummy/posts" className="border-2 border-orange-600 mr-3">
        게시글 목록
      </Link>

      <h2>홈페이지</h2>
    </div>
  );
};

export default Home;
