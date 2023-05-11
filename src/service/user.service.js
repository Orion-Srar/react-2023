import {axiosPlaceholder} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: ()=>axiosPlaceholder.get(urls.users),
    create: (user)=>axiosPlaceholder.post(urls.users, user)
}

export {
    userService
}