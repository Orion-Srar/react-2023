import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`),
    updateCar: (id,car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteCarById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}