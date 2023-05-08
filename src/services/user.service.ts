import {IRes} from "../types/res.type";
import {IUser} from "../interfaces";
import {placeAxiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: (): IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    create: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user)
}


export {
    userService
}