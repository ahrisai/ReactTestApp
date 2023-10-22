import React from "react";
import CustomButton from "./UI/Button/CustomButton";
import CustomInput from "./UI/Input/CustomInput";
import { useState } from "react";
const PostForm = ({createPost}) => {

    const [newPost, setNewPost] = useState({
        title:'',
        body:'',
        id:null,
       })

        function addNewPost(e) {
          e.preventDefault();
          createPost({...newPost,id:new Date().getTime()})
          setNewPost({title:'',body:'',id:null})
      
        }
  return (
    <form>
      <CustomInput
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        type="body"
        placeholder="Название поста"
        value={newPost.title}
      />
      <CustomInput
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        type="body"
        placeholder="Текст поста"
        value={newPost.body}
      />
      <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
    </form>
  );
};

export default PostForm;
