import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    setResult(x + y);
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    setResult(x - y);
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
    setResult(x * y);
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
    setResult(x / y);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const inputValue = Number(value);

    if (name === "x") {
      Number(value) + x;
      setX(inputValue);
    }

    if (name === "y") {
      Number(value) + y;
      setY(inputValue);
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          value={x.toString()}
          onChange={handleChange}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          value={y.toString()}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={add}
        >
          더하기 +
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={subtract}
        >
          빼기 -
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={multiply}
        >
          곱하기 *
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={divide}
        >
          나누기 /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
