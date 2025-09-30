import React, { useState } from "react";

const ObjectState = () => {
  // 방법1 : 초기값을 미리 지정해서 사용하기
  // const initialUser = { name: "홍길동", age: 25 };
  const [user, setUser] = useState({ name: "홍길동", age: 25 });

  // 방법2 : 새로운 state를 만들어둔다.
  const [initialUser] = useState(user);

  function updateName() {
    console.log("이름 업데이트");
    // 상태 업데이트 로직

    const newUser = { ...user, name: "김철수" };
    setUser(newUser);
  }

  function increaseAge() {
    console.log("나이 증가");
    // 상태 업데이트 로직
    const newUser = { ...user, age: user.age + 1 };
    setUser(newUser);
  }

  function resetUser() {
    console.log("사용자 정보 초기화");
    // 상태 업데이트 로직
    setUser(initialUser);
  }
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">객체 상태 관리</h2>
      <div className="text-center mb-4">
        <p className="text-lg">이름: {user.name}</p>
        <p className="text-lg">나이: {user.age}</p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={updateName}
        >
          이름을 "김철수"로 업데이트
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={increaseAge}
        >
          나이 +1
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={resetUser}
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default ObjectState;
