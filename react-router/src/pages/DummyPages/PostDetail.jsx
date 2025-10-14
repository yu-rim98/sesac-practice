import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost(postId) {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
    }
    getPost(postId);
  }, [postId]);
  return (
    <div>
      <h2>글 상세</h2>
      <p>글 제목 : {post.title}</p>
      <p>내용 : {post.body}</p>
      <p>
        좋아요 : {post?.reactions?.likes || 0} | 싫어요 :
        {post?.reactions?.dislikes || 0}
      </p>
    </div>
  );
};

export default PostDetail;
