import {axiosCar} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosCar.get(urls.cars.cars),
    create: (car) => axiosCar.post(urls.cars.cars, car),
    update: (car, id) => axiosCar.put(urls.cars.byId(id), car),
    delete: (id) => axiosCar.delete(urls.cars.byId(id))
}

export {
    carService
}