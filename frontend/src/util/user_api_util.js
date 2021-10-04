import axios from "axios";

export const getUser = (userId) =>{
    return axios.get(`api/users/${userId}`)
}

export const editUser = (user) => {
    return axios.patch(`api/users/${user.id}`, user)
}

export const deleteUser = userId => {
    return axios.delete(`api/users/${userId}`)
}