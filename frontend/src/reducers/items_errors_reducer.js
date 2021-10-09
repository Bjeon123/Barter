import { RECEIVE_ITEM_ERRORS } from "../actions/item_actions";

const _nullErrors = [];
const ItemErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ITEM_ERRORS:
            return action.errors
        default:
            return {}
    }
}

export default ItemErrorsReducer;