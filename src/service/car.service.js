import {urls} from "../constants";
import {axiosService} from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars.cars),
    create: (car) => axiosService.post(urls.cars.cars, car),
    update: (car, id) => axiosService.put(urls.cars.byId(id), car),
    delete: (id) => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}