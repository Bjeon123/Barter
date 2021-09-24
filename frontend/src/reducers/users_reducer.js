import { RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign( {}, state);
    switch (action.type) {
        case RECEIVE_USER:
            next[action.user.id] = action.user
            return next 
        case REMOVE_USER:
            delete next[action.user.id]
            return next 
        default:
            return state 
    }
}

export default UsersReducer