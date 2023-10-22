import React from "react";
import Post from "./Post";
const PostList = ({ posts, removePost }) => {
  return (
    <>
    {posts.length === 0 
    ? <h1 style={{ textAlign: "center" }} >Список постов пуст</h1>
    : <div>
      <h1 style={{ textAlign: "center" }}>
        Список постов
      </h1>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          number={index + 1}
          removePost={removePost}
        />
      ))}
      </div>
    }
    </>
  );
};

export default PostList;
