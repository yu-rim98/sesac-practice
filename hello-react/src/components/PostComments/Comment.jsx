import React, { useEffect, useState } from "react";
import axios from "axios";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getComments() {
      const response = await axios.get(
        `https://dummyjson.com/comments/post/${postId}`
      );

      setComments(response.data.comments);
    }
    getComments();
  }, [postId]);
  // console.log(comments);

  return (
    <div className="mt-5">
      <p>댓글</p>
      <ul className="mt-3">
        {comments.length < 1
          ? "댓글이 없습니다."
          : comments.map((comment) => (
              <li
                className="border-l-4 border-l-indigo-400 bg-gray-100 p-3 mb-4"
                key={comment.id}
              >
                <p>{comment.body}</p>
                <p className="text-gray-500">{comment.user.username}</p>
                <p className="text-gray-500">♥️ {comment.likes}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Comment;
