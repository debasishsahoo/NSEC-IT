// API NOTIFICATION MESSAGES
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

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/api/user/login', method: 'POST' },
    userSignup: { url: '/api/user/signup', method: 'POST' },
    getAllPosts: { url: '/api/post/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/api/user/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: '/api/post/create', method: 'POST' },
    deletePost: { url: '/api/post/delete', method: 'DELETE', query: true },
    getPostById: { url: '/api/post/post', method: 'GET', query: true },
    newComment: { url: '/api/comment/comment/new', method: 'POST' },
    getAllComments: { url: '/api/comment/comments', method: 'GET', query: true },
    deleteComment: { url: '/api/comment/comment/delete', method: 'DELETE', query: true },
    updatePost: { url: '/api/post/update', method: 'PUT', query: true }
}