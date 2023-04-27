const baseURL = 'https://jsonplaceholder.typicode.com'
const posts = '/posts'

const urls = {
    posts: {
        getById: (id) => `${posts}/${id}`
    },
    todos: '/todos',
    albums: '/albums',
    comments: '/comments'
}

export {
    baseURL,
    urls
}