import { RECEIVE_OFFER_ERRORS } from "../actions/offer_actions"

const _nullErrors = [];
const OfferErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_OFFER_ERRORS:
            return action.errors
        default:
            return state;
    }
}

export default OfferErrorsReducer