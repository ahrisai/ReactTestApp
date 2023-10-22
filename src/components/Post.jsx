import React from 'react'
import CustomButton from './UI/Button/CustomButton'

const Post = ({post,number,removePost}) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{number}. {post.title} </strong>
          <div>
            {post.text}
          </div>
        </div>
        <div className="post__btns">
          <CustomButton onClick={()=>{removePost(post.id)}}>Удалить</CustomButton>
          </div>
      </div>
  )
}

export default Post