import axios from 'axios';

export const fetchOffer = offerId => axios.get(`/api/offers/${offerId}`);

export const fetchOffers = () => axios.get(`/api/offers`);

export const fetchUserOffers= (userId) => axios.get(`/api/offers/user/${userId}`);

export const createOffer = offer => axios.post(`/api/posts/create`, offer);

// export const updatePost = postId => axios.patch(`/api/posts/update/${postId}`);

// export const deletePost = postId => axios.delete(`/api/posts/delete/${postId}`);