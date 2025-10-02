import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";

const Post = () => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    async function getPost() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
    }

    getPost();
  }, [postId]);

  console.log(post);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPostId(Number(inputValue));
  };

  return (
    <div>
      <div className="flex pt-5">
        <span className="mr-4">글 번호</span>
        <form onSubmit={handleSubmit}>
          <input
            className="border mr-4"
            type="number"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="bg-blue-500 pl-3 pr-3" type="submit">
            검색
          </button>
        </form>
      </div>

      <div className="border p-3 mt-5">
        <h2 className="text-lg font-bold">
          No. {postId} {post.title}
        </h2>
        <p className="text-gray-600">{post.body}</p>
        <p className="text-gray-300">userId: {post.userId}</p>
        <p className="text-gray-300">views: {post.views}</p>
      </div>

      <Comment postId={postId} />
    </div>
  );
};

export default Post;
