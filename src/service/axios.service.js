import axios from "axios";
import {carAPI, placeholderAPI} from "../constants";

const axiosPlaceholder = axios.create({baseURL: placeholderAPI});
const axiosCar = axios.create({baseURL: carAPI});

export {
    axiosPlaceholder,
    axiosCar
}