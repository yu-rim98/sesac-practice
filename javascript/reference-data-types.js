// 모든 변수는 let 키워드 또는 const 키워드를 적절하게 선택하여 선언한다
// let 키워드 : 재할당이 필요한 변수
// const 키워드 : 재할당이 필요하지 않은 변수

// TODO: 배열 생성과 접근 실습
// 변수 numbers에 1, 2, 3, 4를 담은 배열을 할당하고 출력한다
let numbers = [1, 2, 3, 4];
console.log(numbers);
// numbers 배열의 첫 번째 원소를 출력한다
console.log(numbers[0]);
// numbers 배열의 세 번째 원소를 출력한다
console.log(numbers[2]);

/* 출력 결과
[1, 2, 3, 4]
1
3
*/

// TODO: 배열 생성과 길이 실습
// 변수 days에 "월", "화", "수"를 담은 배열을 할당하고 출력한다
let days = ["월", "화", "수"];
console.log(days);
// days 배열의 길이를 출력한다(배열의 길이: 배열.length)
console.log(days.length);
// "목"을 배열에 추가하고 배열을 출력한다
days.push("목");
console.log(days);

/* 출력 결과
['월', '화', '수']
3
['월', '화', '수', '목']
*/

// TODO: 배열 중간 원소 접근 실습
// 변수 numbers에 100, 200, 300, 400, 500을 담은 배열을 할당하고 출력한다
numbers = [100, 200, 300, 400, 500];
console.log(numbers);
// 세 번째 원소를 출력한다
console.log(numbers[2]);
// 네 번째 원소를 350으로 변경하고 배열을 출력한다
numbers[3] = 350;
console.log(numbers);

/* 출력 결과
[100, 200, 300, 400, 500]
300
[100, 200, 300, 350, 500]
*/

// TODO: 배열 첫 번째와 마지막 원소 실습
// 변수 scores에 5, 10, 15, 20을 담은 배열을 할당하고 출력한다
let scores = [5, 10, 15, 20];
console.log(scores);
// 첫 번째 원소를 출력한다
console.log(scores[0]);
// 마지막 원소를 출력한다 (마지막 원소 인덱스: 배열.length - 1)
console.log(scores[scores.length - 1]);
// 두 번째 원소를 25로 변경하고 배열을 출력한다
scores[1] = 25;
console.log(scores);

/* 출력 결과
[5, 10, 15, 20]
5
20
[5, 25, 15, 20]
*/

// TODO: 배열 원소 수정 메서드 실습
// 변수 fruits에 "apple", "banana", "orange"를 담은 배열을 할당하고 출력한다
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
// 두 번째 원소를 "grape"로 수정하고 배열을 출력한다
fruits[1] = "grape";
console.log(fruits);

// 첫 번째 원소를 "strawberry"로 수정하고 배열을 출력한다
fruits[0] = "strawberry";
console.log(fruits);

/* 출력 결과
['apple', 'banana', 'orange']
['apple', 'grape', 'orange']
['strawberry', 'grape', 'orange']
*/

// TODO: 배열 앞뒤 추가 제거 실습
// 변수 letters에 "A", "B"를 담은 배열을 할당하고 출력한다
let letters = ["A", "B"];
console.log(letters);
// 배열 맨 뒤에 "Z"를 추가하고 출력한다
letters.push("Z");
console.log(letters);

// 배열 맨 뒤에서 원소를 제거하고, 제거된 원소와 배열을 출력한다
let ch = letters.pop();
console.log(ch);
console.log(letters);

/* 출력 결과
['A', 'B']
['A', 'B', 'Z']
Z
['A', 'B']
*/

// TODO: 배열 원소 추가 메서드 실습
// 변수 scores에 10, 20을 담은 배열을 할당하고 출력한다
scores = [10, 20];
console.log(scores);
// scores 배열에 30을 추가하고 출력한다
scores.push(30);
console.log(scores);
// scores 배열의 마지막 원소를 제거하고, 제거된 원소와 최종 배열을 출력한다
let score = scores.pop();
console.log(score);
console.log(scores);

/* 출력 결과
[10, 20]
[10, 20, 30]
30
[10, 20]
*/

// TODO: 새로운 배열 만들기
// 변수 numbers에 1, 2, 3을 담은 배열을 할당하고 출력한다
numbers = [1, 2, 3];
console.log(numbers);
// 배열의 반복문을 활용해서 변수 newNumbers에 numbers 배열의 각 원소에 2를 곱한 값을 담은 배열을 할당하고 출력한다
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers[i] = numbers[i] * 2;
}

// for...of 반복문
// for (value of numbers) {
//   newNumbers.push(value * 2);
// }

console.log(newNumbers);

/* 출력 결과
[1, 2, 3]
[2, 4, 6]
*/

// TODO: 새로운 배열 만들기 2
// 변수 numbers2에 1, 2, 3, 4, 5를 담은 배열을 할당하고 출력한다
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);

let newNumbers2 = [];
// 배열의 반복문을 활용해서 변수 newNumbers2에 numbers2 배열의 원소 중 짝수만 담은 배열을 할당하고 출력한다
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    newNumbers2.push(numbers2[i]);
  }
}

// for...of 반복문
// for (value of numbers2) {
//   if (value % 2 === 0) {
//     newNumbers2.push(value);
//   }
// }
console.log(newNumbers2);

/* 출력 결과
[1, 2, 3, 4, 5]
[2, 4]
*/

// TODO: 객체 기초 - 객체 생성과 속성 접근
// 변수 book에 title: "책 제목", author: "작가명" 속성을 가진 객체를 할당하고 출력한다
let book = {
  title: "책 제목",
  author: "작가명",
};
console.log(book);
// book의 title을 출력한다
console.log(book.title);
// book의 author를 출력한다
console.log(book.author);

/* 출력 결과
{ title: '책 제목', author: '작가명' }
책 제목
작가명
*/

// TODO: 객체 기초 - 다중 속성 객체 다루기
// 변수 person에 name: "김철수", age: 25, job: "학생" 속성을 가진 객체를 할당하고 출력한다
let person = {
  name: "김철수",
  age: 25,
  job: "학생",
};
console.log(person);
// person 객체의 name, age, job 속성을 각각 출력한다
console.log(person.name);
console.log(person.age);
console.log(person.job);

/* 출력 결과
{ name: '김철수', age: 25, job: '학생' }
김철수
25
학생
*/

// TODO: 객체 기초 - 속성 값 수정과 추가
// 변수 product에 name: "컴퓨터", price: 1000000을 담은 객체를 할당하고 출력한다
let product = {
  name: "컴퓨터",
  price: 1000000,
};
console.log(product);
// price를 1200000으로 변경하고 객체를 출력한다
product.price = 1200000;
console.log(product);

// brand: "삼성" 속성을 추가하고 객체를 출력한다
product.brand = "삼성";
console.log(product);

/* 출력 결과
{ name: '컴퓨터', price: 1000000 }
{ name: '컴퓨터', price: 1200000 }
{ name: '컴퓨터', price: 1200000, brand: '삼성' }
*/

// TODO: 객체 조작 - 복수 속성 수정과 추가
// 변수 user에 name: "박영희", age: 28 속성을 가진 객체를 할당하고 출력한다
let user = {
  name: "박영희",
  age: 28,
};
console.log(user);
// user 객체의 age를 30으로 수정하고, job: "개발자" 속성을 추가한 후 객체를 출력한다
user.age = 30;
user.job = "개발자";
console.log(user);

// address: "서울" 속성을 추가하고 최종 객체를 출력한다
user.address = "서울";
console.log(user);

/* 출력 결과
{ name: '박영희', age: 28 }
{ name: '박영희', age: 30, job: '개발자' }
{ name: '박영희', age: 30, job: '개발자', address: '서울' }
*/

// TODO: 객체 조작 - Object 메서드와 속성 제거
// 변수 person에 name: "이민수", age: 35, city: "부산" 속성을 가진 객체를 할당한다
person = {
  name: "이민수",
  age: 35,
  city: "부산",
};
// 객체의 모든 키를 배열로 출력한다
console.log(Object.keys(person));
// 객체의 모든 값을 배열로 출력한다
console.log(Object.values(person));

// 객체의 모든 [키, 값] 쌍을 배열로 출력한다
console.log(Object.entries(person));

/* 출력 결과
['name', 'age', 'city']
['이민수', 35, '부산']
[['name', '이민수'], ['age', 35], ['city', '부산']]
*/

// TODO: 배열과 객체 혼합 1
// 변수 student에 name: "학생", grades: ["A", "B", "C"] 속성을 가진 객체를 할당하고 출력한다
let student = {
  name: "학생",
  grades: ["A", "B", "C"],
};
console.log(student);

// student 객체의 grades 속성에 "D"를 추가하고 객체 student를 출력한다
student.grades.push("D");
console.log(student);

/* 출력 결과
{ name: "학생", grades: ["A", "B", "C"] }
{ name: "학생", grades: ["A", "B", "C", "D"] }
*/

// TODO: 배열과 객체 혼합 2
// 아래 변수 memoList에서 isDone이 false인 메모들만 출력한다

// 반복문과 조건문을 활용한다
const memoList = [
  { content: "오늘 할 일", isDone: false },
  { content: "오늘 할 일 2", isDone: true },
  { content: "오늘 할 일 3", isDone: false },
];

for (let i = 0; i < memoList.length; i++) {
  if (memoList[i].isDone === false) {
    console.log(memoList[i]);
  }
}
/*
{ content: "오늘 할 일", isDone: false }
{ content: "오늘 할 일 3", isDone: false }
*/

// TODO: 배열과 객체 혼합 3
// 아래 변수 userList에서 age가 짝수인 속성의 name을 출력한다
// 반복문과 조건문을 활용한다
const userList = [
  { name: "김철수", age: 20 },
  { name: "이순신", age: 23 },
  { name: "장영실", age: 24 },
  { name: "홍길동", age: 25 },
];

for (let i = 0; i < userList.length; i++) {
  if (userList[i].age % 2 === 0) {
    console.log(userList[i].name);
  }
}

/* 출력 결과
김철수
장영실
*/
