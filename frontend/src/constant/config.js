export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

//BaseURL=http://localhost:8000
//PATH ='/api/user'
//PATH ='/api/post'
//PATH ='/api/comment'


//API SERVICE URL 
//NEED SERVICE CALL:{url:'/',,method:"POST/GET/PUT/DELETE"}
export const SERVICE_URL = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    newComment: { url: '/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: '/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
}