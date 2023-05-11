import {axiosPlaceholder} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => axiosPlaceholder.get(urls.comments),
    create: (comment) => axiosPlaceholder.post(urls.comments, comment)
}

export {
    commentService
}