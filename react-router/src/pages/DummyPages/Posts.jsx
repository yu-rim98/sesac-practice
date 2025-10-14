import React, { useEffect, useState } from "react";
import PostsList from "../../components/PostsList";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PATHS from "../../constants/Paths";

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
        <Link key={post.id} to={PATHS.DUMMY.getPostDetailPath(post.id)}>
          <PostsList post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
