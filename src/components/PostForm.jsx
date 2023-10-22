import React from "react";
import CustomButton from "./UI/Button/CustomButton";
import CustomInput from "./UI/Input/CustomInput";
import { useState } from "react";
const PostForm = ({createPost}) => {

    const [newPost, setNewPost] = useState({
        title:'',
        text:'',
        id:null,
       })

        function addNewPost(e) {
          e.preventDefault();
          createPost({...newPost,id:new Date().getTime()})
          setNewPost({title:'',text:'',id:null})
      
        }
  return (
    <form>
      <CustomInput
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        type="text"
        placeholder="Название поста"
        value={newPost.title}
      />
      <CustomInput
        onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
        type="text"
        placeholder="Текст поста"
        value={newPost.text}
      />
      <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
    </form>
  );
};

export default PostForm;
