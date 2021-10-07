import axios from 'axios';

export const fetchItem = itemId => axios.get(`/api/items/show/${itemId}`);

export const fetchItems = () => axios.get(`/api/items`);

export const fetchUserItems = (userId) => axios.get(`/api/items/user/${userId}`)

export const fetchOfferItems = (offerId) => axios.get(`/api/items/offer/${offerId}`)

export const createItem = item => axios.post(`/api/items/create`, item);

export const updateItem = (itemId,item) => axios.patch(`/api/items/${itemId}`,item);

export const deleteItem = itemId => axios.delete(`/api/items/${itemId}`);