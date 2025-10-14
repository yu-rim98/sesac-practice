import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import PATHS from "../constants/Paths";

const DummyLayout = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-2 border-amber-200 bg-amber-200 text-amber-800 px-4 py-2 block"
      : "border-2 border-amber-200 px-4 py-2 block";

  return (
    <div>
      <ul className="flex">
        <li className="m-2">
          <NavLink to={PATHS.ROOT.INDEX} className={navLinkClass}>
            홈
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink to={PATHS.DUMMY.PRODUCTS} className={navLinkClass}>
            상품 목록
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink to={PATHS.DUMMY.CARTS} className={navLinkClass}>
            장바구니 목록
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink to={PATHS.DUMMY.POSTS} className={navLinkClass}>
            게시글 목록
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default DummyLayout;
