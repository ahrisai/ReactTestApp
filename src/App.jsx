import React, { useState,useRef } from 'react'
import PostList from './components/PostList'
import Post from './components/Post'
import CustomInput from './components/UI/Input/CustomInput'
import CustomButton from './components/UI/Button/CustomButton'

import './styles/App.css'

export default function App() {
 const [posts, setPosts] = useState([
  {id:1,title:'JavaScript', text:'Описание'},
  {id:2,title:'JavaScript', text:'Описание'},
  {id:3,title:'JavaScript', text:'Описание'},
  {id:4,title:'JavaScript', text:'Описание'},
  {id:5,title:'JavaScript', text:'Описание'},
 ])

 const [newPost, setNewPost] = useState({
  title:'',
  text:'',
  id:null,
 })
  function addNewPost(e) {
    e.preventDefault();

    setPosts([{...newPost,id:new Date().getTime()},...posts])
  }
  function removePost(id) {
    
  }
  return (
    <div className="App">
      <form >
        <CustomInput onChange={(e)=>setNewPost({...newPost,title:e.target.value})} type="text" placeholder='Название поста' />
        <CustomInput onChange={(e)=>setNewPost({...newPost,text:e.target.value})} type="text" placeholder='Текст поста' />
        <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
      </form>
     <PostList posts={posts} removePost={removePost}/>
    </div>
  )
}
