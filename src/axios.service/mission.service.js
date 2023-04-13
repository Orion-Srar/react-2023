import axios from "axios";

export const missionService = {
    getAll: () => axios('https://api.spacexdata.com/v3/launches/')
}