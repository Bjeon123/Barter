import axios from "axios";

export const editUser = (user) => {
    return axios.put(`api/users/${user.id}`, user)
}

export const deleteUser = userId => {
    return axios.delete(`api/users/${userId}`)
}