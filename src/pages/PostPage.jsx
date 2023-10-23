import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/postService';
import Loader from '../components/Loader/Loader';
const PostPage = () => {
    const params = useParams();
    const [fetchPostById,isLoading]=useFetching(async()=>{
      const post= await PostService.fetchPost(params.id)
      const comments= await PostService.fetchComments(params.id)
      setCurrentPost(post)
      setComments(comments)
    })
    const [currentPost, setCurrentPost] = useState({})

    const [comments, setComments] = useState([])
    console.log(currentPost)

    useEffect(() => {
      fetchPostById()
    }, [])
    
  return (
      isLoading
        ?<Loader/>
        :<div>
        <h1>{currentPost.title}</h1>
        <p>{currentPost.body}</p>
        <div className="comments">
        {comments.map(comment=>(
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.body}</p>
          <p>{comment.email}</p>

        </div>))

        }
        </div>
        
    </div>
      
      
   
  )
}

export default PostPage