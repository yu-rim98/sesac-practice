import React, { useEffect, useState } from "react";
import PostsList from "../../components/PostsList";
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
      <h2>게시글 리스트</h2>
      {posts.map((post) => (
        <PostsList key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
