import React, { useState, useRef, useEffect, useMemo } from "react";
import PostList from "./components/PostList";

import CustomInput from "./components/UI/Input/CustomInput";
import CustomButton from "./components/UI/Button/CustomButton";

import "./styles/App.css";
import PostForm from "./components/PostForm";
import CustomSelect from "./components/UI/Select/CustomSelect";
import PostFilter from "./components/PostFilter";
import Modal from "./components/Modal/Modal";
import { useSortedPosts } from "./hooks/usePosts";
export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "a", text: "b" },
    { id: 2, title: "b", text: "a" },
    { id: 3, title: "c", text: "e" },
    { id: 4, title: "d", text: "d" },
    { id: 5, title: "e", text: "Описание" },
  ]);

  const [filter, setFilter] = useState({ sort: "", search: "" });
  
  const sortedPosts=useSortedPosts(posts,filter.sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((p) =>
      p.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }, [filter.search, sortedPosts]);
  function createPost(newPost) {
    setPosts([newPost, ...posts]);
  }
  function removePost(id) {
    setPosts(posts.filter((post) => post.id != id));
  }
function switchVisible(visible,setVisible) {
  visible?setVisible(false):setVisible(true)
}
  return (
    <div className="App">
      <CustomButton onClick={()=>switchVisible(true,)}>Создать пост</CustomButton>
      <Modal switchVisible={switchVisible}>
      <PostForm createPost={createPost} />
      </Modal>
      
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
    </div>
  );
}
