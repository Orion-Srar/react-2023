import axios from "axios";

const personalService = {
    getAll: () => axios('https://rickandmortyapi.com/api/character')
}

export {
    personalService
}