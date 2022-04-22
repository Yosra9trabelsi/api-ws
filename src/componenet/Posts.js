import React from "react";
import PostImage from "./PostImage";

const Posts = ({ posts }) => {
  return (
    <div className="card-container">
      {posts.map((el) => (
        <PostImage post={el} />
      ))}
    </div>
  );
};

export default Posts;
