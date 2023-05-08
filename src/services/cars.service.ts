import {ICar} from "../interfaces";
import {urls} from "../constants";
import {carAxiosService} from "./axios.service";
import {IRes} from "../types/res.type";

const carsService = {
    getAll: (): IRes<ICar[]> => carAxiosService.get(urls.carAPI.cars),
    create: (car: ICar): IRes<ICar> => carAxiosService.post(urls.carAPI.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carAxiosService.put(urls.carAPI.byId(id), car),
    deleteById: (id: number): IRes<void> => carAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carsService
}