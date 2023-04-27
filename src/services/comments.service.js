import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

class CommentsService {
    getAll(){
        return axiosService.get(urls.comments)
    }
}

export const commentsService = new CommentsService();