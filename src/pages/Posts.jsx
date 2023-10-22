import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import "../styles/App.css";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/Modal/Modal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../api/postService";
import Loader from "../components/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import getPagesCount from "../components/utils/pages";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/Pagination/Pagination";
export default function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)


  const [fetchPosts, isLoading, isError] = useFetching(async () => {
    const response = await PostService.fetchPosts(limit,page);
    const totalCount=response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount,limit))
    setPosts(response.data);
  });
  
  const finalPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    fetchPosts();
  }, [page]);

const pagesArray=usePagination(totalPages)

  function createPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  function removePost(id) {
    setPosts(posts.filter((post) => post.id != id));
  }

  return (
    <div className="App">
      <Modal>
        <PostForm createPost={createPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isError ? (
        <h1>{isError}</h1>
      ) : isLoading ? (
        <Loader />
      ) : (
        <PostList posts={finalPosts} removePost={removePost} />
      )}
      <Pagination setPage={setPage} pagesArray={pagesArray} page={page}/>
      
    </div>
  );
}
