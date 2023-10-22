import axios from 'axios'


export default class PostService{
    static async fetchPosts(limit,page){
           return await axios.get(`https://jsonplaceholder.typicode.com/posts`,{
            params:{
                _limit:limit,
                _page:page
            }
           })

    }
}