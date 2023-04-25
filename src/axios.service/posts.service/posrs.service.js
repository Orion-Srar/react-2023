import axios from "axios";

export const postsService = {
    getAll: (userId)=> axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
}