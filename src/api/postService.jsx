import axios from 'axios'


export default class PostService{
    static async fetchPosts(limit,page){
           const response= await axios.get(`https://jsonplaceholder.typicode.com/posts`,{
            params:{
                _limit:limit,
                _page:page,
                
            }
           }).then(res=>{console.log(res)
        return res
        })
        return response
    }
    static async fetchPost(id){
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    }
    static async fetchComments(id){
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res=>{
        return res.data
        })
        return response
    }
}