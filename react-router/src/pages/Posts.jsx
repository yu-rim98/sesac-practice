import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    const data = response.data;
    setPosts(data.posts);
    // console.log(data.posts);
  };

  return (
    <div>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/")}
      >
        홈으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/products")}
      >
        상품 목록으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/carts")}
      >
        장바구니 목록으로 이동
      </button>
      <button
        className="border-2 border-orange-600 mr-3"
        onClick={() => navigate("/dummy/posts")}
      >
        게시판 목록으로 이동
      </button>
      <h2>게시글 리스트</h2>
      {posts.map((post) => (
        <PostsList key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
