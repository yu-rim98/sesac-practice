import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/counterSlice";

const CountDecrement = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button className="border-2 p-2 cursor-pointer" onClick={handleDecrement}>
        전역 상태 count 감소
      </button>
      <div>현재 단위: {step}</div>
    </div>
  );
};

export default CountDecrement;
