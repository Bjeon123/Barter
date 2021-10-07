import axios from 'axios';

export const fetchOffer = offerId => axios.get(`/api/offers/${offerId}`);

export const fetchOffers = () => axios.get(`/api/offers`);

export const fetchUserOffers= (userId) => axios.get(`/api/offers/user/${userId}`);

export const createOffer = offer => {
    return(
        axios.post(`/api/offers`, offer)
    )
} 

export const fetchPostOffers = postId => axios.get(`/api/offers/post/${postId}`);

export const deleteOffer = offerId => axios.delete(`/api/offers/${offerId}`);

export const updateOffer = (offer) => axios.patch(`/api/offers/${offer.id}`, offer);

export const deletePostOffers = postId => axios.delete(`/api/offers/post/${postId}`)
