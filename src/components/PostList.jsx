import React from "react";
import Post from "./Post";
import {TransitionGroup ,CSSTransition} from 'react-transition-group'
const PostList = ({ posts, removePost }) => {
  return (
    <>
    {posts.length === 0 
    ? <h1 style={{ textAlign: "center" }} >Список постов пуст</h1>
    : <div>
      <h1 style={{ textAlign: "center" }}>
        Список постов
      </h1>
      <TransitionGroup>
      {posts.map((post, index) => (
         <CSSTransition
         key={post.id}
         timeout={500}
         classNames="post"
       >
        
        <Post
         
          post={post}
          number={index + 1}
          removePost={removePost}
        />
         </CSSTransition>
      ))}
      </TransitionGroup>
    
      </div>
    }
    </>
  );
};

export default PostList;
