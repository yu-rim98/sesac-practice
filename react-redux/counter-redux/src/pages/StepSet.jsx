import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStepByAmount } from "../store/counterSlice";

const StepSet = () => {
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  const handleSetStep = (num) => {
    dispatch(setStepByAmount(num));
  };
  return (
    <div>
      <div className="mb-4">
        <div>현재 단위: {step}</div>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(1)}
        >
          단위 1
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(5)}
        >
          단위 5
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(10)}
        >
          단위 10
        </button>
      </div>
    </div>
  );
};

export default StepSet;
