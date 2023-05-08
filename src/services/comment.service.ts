import {IRes} from "../types/res.type";
import {IComment} from "../interfaces";
import {placeAxiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: (): IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment: IComment): IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}