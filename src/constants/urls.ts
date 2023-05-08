const carBaseURL = 'http://owu.linkpc.net/carsAPI/v1';
const placeBaseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const comments = '/comments';
const cars = '/cars';

const urls = {
    carAPI:{
        cars,
        byId:(id:number):string=> `${cars}/${id}`
    },
    placeAPI: {
        users,
        comments
    }
}

export {
    carBaseURL,
    placeBaseURL,
    urls
}




