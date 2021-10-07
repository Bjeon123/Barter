import { RECEIVE_TRANSACTION,RECEIVE_TRANSACTIONS,REMOVE_TRANSACTIONS } from "../actions/transaction_actions";


const transactionReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return Object.assign(nextState, { [action.post.id]: action.post })
        case RECEIVE_TRANSACTIONS:
            return action.transactions
        case REMOVE_TRANSACTIONS:
            delete nextState[action.postId]
            return nextState
        default:
            return state;
    }
}

export default transactionReducer;