import React, { useState } from "react";

const levelArr = [
  {
    id: 1,
    value: "신입",
  },

  {
    id: 2,
    value: "주니어",
  },
  {
    id: 3,
    value: "시니어",
  },
];

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordChack: "",
  });

  const [selectedLevel, setSelectedLevel] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newForm = { ...form, [name]: value }; // name과 일치하는 key의 값을 새로운 값으로 덮어씀
    setForm(newForm);

    if (name === "password" || name === "passwordChack") {
      const passwordForValidation = name === "password" ? value : form.password;
      const passwordChackForValidation =
        name === "passwordChack" ? value : form.passwordChack;

      const validataionMsg = validationPassword(
        passwordForValidation,
        passwordChackForValidation
      );
      setPasswordMsg(validataionMsg);
    }
  };

  const validationPassword = (password, passwordChack) => {
    if (password.length < 8) {
      return "비밀번호는 8글자 이상이어야 합니다.";
    }

    if (password !== passwordChack) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  };

  const handleRadioChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validataionMsg = validationPassword(
      form.password,
      form.passwordChack
    );

    if (validataionMsg !== "") {
      alert(validataionMsg);
    } else {
      const maskedPassword = "*".repeat(form.password.length);

      const signupMsg = `
        회원가입 정보 : 
        이메일 : ${form.email}
        비밀번호 : ${maskedPassword}
        레벨 : ${selectedLevel}
      `;
      alert(signupMsg);
    }
  };

  return (
    <div className="flex flex-col items-center p-6  rounded-lg">
      <h2 className="font-bold">회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>이메일</p>
          <input
            className="border-1 p-1 mb-3"
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleChange}
            value={form.value}
            required
          />
        </div>

        <div>
          <p>비밀번호</p>
          <input
            className="border-1 p-1 mb-3"
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p>비밀번호 확인</p>
          <input
            className="border-1 p-1 mb-3"
            type="password"
            name="passwordChack"
            placeholder="비밀번호"
            required
            onChange={handleChange}
          />
        </div>
        <p>{passwordMsg}</p>
        <div>
          <p>레벨</p>
          <label htmlFor=""></label>
          {levelArr.map((element) => (
            <label key={element.id}>
              <input
                className="mb-3"
                type="radio"
                name="level"
                value={element.value}
                checked={element.value === selectedLevel} // 지금 그리고 있는 element의 값과 선택된 값이 같은지
                onChange={handleRadioChange}
                required
              />
              {element.value}
            </label>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button
            className="bg-blue-500 text-white pl-10 pr-23 text-right"
            type="submit"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
