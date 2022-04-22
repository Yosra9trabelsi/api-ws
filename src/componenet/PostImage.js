import React from "react";

const PostImage = ({ post }) => {
  return (
    <div className="card">
      <img src={post.url} alt="" />
      <h4>{post.title}</h4>
    </div>
  );
};

export default PostImage;
