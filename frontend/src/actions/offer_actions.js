import * as OfferApiUtil from '../util/offer_api_util';

export const RECEIVE_OFFER = "RECEIVE_OFFER";
export const RECEIVE_OFFERS = "RECEIVE_OFFERS";
export const REMOVE_OFFERS = "REMOVE_OFFERS";
export const RECEIVE_OFFER_ERRORS = "RECEIVE_OFFER_ERRORS";

const receiveOffer = offer => ({
    type: RECEIVE_OFFER,
    offer
});

const receiveOffers = offers => ({
    type: RECEIVE_OFFERS,
    offers
});

export const receiveOfferErrors = errors => ({
    type: RECEIVE_OFFER_ERRORS,
    errors
});

export const fetchOffers = () => dispatch => (
    OfferApiUtil.fetchOffers()
        .then(Offers => dispatch(receiveOffers(Offers)))
);

export const fetchUserOffers = (userId) => dispatch => (
    OfferApiUtil.fetchUserOffers(userId)
        .then(Offers => dispatch(receiveOffers(Offers)))
);

export const fetchOffer = offerId => dispatch => (
    OfferApiUtil.fetchOffer(offerId)
        .then(offer => dispatch(receiveOffer(offer)))
);

export const createOffer = offer => dispatch => (
    OfferApiUtil.createOffer(offer)
        .then(offer => dispatch(receiveOffer(offer)))
        .catch(error => dispatch(receiveOfferErrors(error.response.data)))
);

export const deleteOffer = offerId => dispatch => (
    OfferApiUtil.deleteOffer(offerId)
        .then(offers => dispatch(receiveOffers(offers)))
        .catch(error => dispatch(receiveOfferErrors(error.response.data)))
);

export const fetchPostOffers = (postId) => dispatch => (
    OfferApiUtil.fetchPostOffers(postId)
        .then(Offers => dispatch(receiveOffers(Offers)))
);


