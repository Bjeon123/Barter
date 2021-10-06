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

// export const updatePost = postId => axios.patch(`/api/posts/update/${postId}`);
