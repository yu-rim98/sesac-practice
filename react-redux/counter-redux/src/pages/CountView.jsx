import React from "react";
import { useSelector } from "react-redux";

const CountView = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <div>전역 상태 : {count}</div>
    </div>
  );
};

export default CountView;
