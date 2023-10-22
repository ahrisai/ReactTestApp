import React from 'react'
import CustomButton from './UI/Button/CustomButton'

const Post = ({post,removePost}) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title} </strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btns">
          <CustomButton onClick={()=>{removePost(post.id)}}>Удалить</CustomButton>
          </div>
      </div>
  )
}

export default Post