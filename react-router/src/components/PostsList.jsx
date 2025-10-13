import React from "react";

const PostsList = ({ post }) => {
  return (
    <div>
      <ul>
        <li>글 제목 : {post.title}</li>
      </ul>
    </div>
  );
};

export default PostsList;
