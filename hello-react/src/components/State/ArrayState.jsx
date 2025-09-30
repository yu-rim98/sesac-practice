import React, { useState } from "react";

const ArrayState = () => {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    console.log("할 일 추가");
    // 상태 업데이트 로직
    const newTodo = {
      id: todos.length + 1,
      text: `할 일 ${todos.length + 1}`,
    };

    const newTodoArr = [...todos, newTodo];

    setTodos(newTodoArr);
  }

  function removeTodo() {
    console.log("마지막 할 일 제거");
    // 상태 업데이트 로직
    const newArr = todos.slice(0, todos.length - 1);
    setTodos(newArr);
  }

  function clearTodos() {
    console.log("모든 할 일 제거");
    // 상태 업데이트 로직
    const newArr = [];
    setTodos(newArr);
  }
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">배열 상태 관리</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">할 일 목록:</h3>
        <ul className="list-disc list-inside">
          {todos.length === 0 ? (
            <li>할 일이 없습니다</li>
          ) : (
            todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
          )}
        </ul>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          할 일 추가
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={removeTodo}
        >
          마지막 할 일 제거
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={clearTodos}
        >
          모든 할 일 제거
        </button>
      </div>
    </div>
  );
};

export default ArrayState;
