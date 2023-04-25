import axios from "axios";

export const userService = {
    gertAll: () => axios('https://jsonplaceholder.typicode.com/users')
}