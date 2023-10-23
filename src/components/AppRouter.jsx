import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route   element={<Posts />} exact path="/posts"/>
      <Route element={<About />} path="/About" />
      <Route element={<PostPage />} exact path="/posts/:id" />

      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;
