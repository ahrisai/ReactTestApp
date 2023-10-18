import React from 'react'
import Post from './Post'
const PostList = ({posts}) => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>{posts.length<1?'Список постов пуст':'Список постов'}</h1>
        {
            posts.map((post,index)=><Post key={post.id} post={post} number={index+1}/>)
        }
    </>
  )
}

export default PostList