import { RECEIVE_OFFERS,RECEIVE_OFFER} from "../actions/offer_actions";

const offersReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_OFFERS:
            return action.offers
        case RECEIVE_OFFER:
            return Object.assign(nextState, { [action.offer.id]: action.offer })
        default:
            return state;
    }
}

export default offersReducer;