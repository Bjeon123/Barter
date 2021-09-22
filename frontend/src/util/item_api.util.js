import axios from 'axios';

export const fetchItem = itemId => axios.get(`/api/items/show/${itemId}`);

export const fetchItems = () => axios.get(`/api/items`);

export const fetchUserItems = (userId) => axios.get(`/api/items/user/${userId}`)

export const fetchPostItems = (postId) => axios.get(`/api/items/post/${postId}`)

export const createItem = item => axios.post(`/api/items/create`, item);

export const updateItem = itemId => axios.patch(`/api/items/update/${itemId}`);

export const deleteItem = itemId => axios.delete(`/api/items/delete/${itemId}`);