import axios, {AxiosResponse} from "axios";
import {carBaseURL, placeBaseURL} from "../constants";

const carAxiosService = axios.create({baseURL: carBaseURL});
const placeAxiosService = axios.create({baseURL: placeBaseURL});

export {
    carAxiosService,
    placeAxiosService
}

