import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/counterSlice";

// 전역 상태 step 은 1, 5, 10 중 하나의 값을 가질 수 있다
// 3개의 버튼을 생성한다.
// 각 버튼을 클릭하여 전역 상태 step 을 1, 5, 10 중 하나로 변경한다
// 전역 상태 count 은 step의 값만큼 증가, 감소한다
// 증가 페이지의 버튼은 전역 상태 count 를 증가시킨다
// 감소 페이지의 버튼은 전역 상태 count 를 감소시킨다

const CountIncrement = () => {
  const step = useSelector((state) => state.counter.step);
  // 디스패처
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <button className="border-2 p-2 cursor-pointer" onClick={handleIncrement}>
        전역 상태 count 증가
      </button>
      <div>현재 단위: {step}</div>
    </div>
  );
};

export default CountIncrement;
