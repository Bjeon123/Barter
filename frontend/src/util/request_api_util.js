import axios from "axios";

export const getRequests = () => {
    return axios.get('/api/tweets')
}

export const getUserRequests = id => {
    return axios.get(`/api/requests/user/${id}`)
}

export const createRequest = data => {
    return axios.post('/api/tweets/', data)
}

// export const deleteRequest = () => {
//     return axios.delete('/api/tweets/')
// }