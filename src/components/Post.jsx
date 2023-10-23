import React from 'react'
import CustomButton from './UI/Button/CustomButton'
import { useNavigate } from 'react-router-dom'
const Post = ({post,removePost}) => {
  const navigate=useNavigate();
  return (
    <div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title} </strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btns">
          <CustomButton onClick={()=>{navigate(`/posts/${post.id}`)}}>Открыть</CustomButton>
          <CustomButton onClick={()=>{removePost(post.id)}}>Удалить</CustomButton>

          </div>
      </div>
  )
}

export default Post