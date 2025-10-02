import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

// 상품은 0번부터
// 5개씩 가져옴
const Container = () => {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const LIMIT = 5; // 한 페이지에 표시할 상품 수

  useEffect(() => {
    async function fetchPosts() {
      // 적절한 요청 URL을 작성한다
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`
      );
      setPosts(response["data"]["posts"]);
    }

    fetchPosts();
  }, [skip]);

  // 적절한 함수를 작성한다
  const handleClick = (event) => {
    const action = event.target.value;

    switch (action) {
      case "first":
        setSkip((preState) => preState - preState);
        break;
      case "prev":
        skip < 1
          ? alert("이전 목록이 없습니다.")
          : setSkip((preState) => preState - 5);
        break;
      case "next":
        setSkip((preState) => preState + 5);
        break;
      case "last":
        setSkip(250 - 5);
        break;
      default:
        break;
    }
  };
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={handleClick}
          value="first"
        >
          처음으로
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={handleClick}
          value="prev"
        >
          이전
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={handleClick}
          value="next"
        >
          다음
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={handleClick}
          value="last"
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Container;
