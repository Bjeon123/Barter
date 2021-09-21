import { RECEIVE_OFFERS,RECEIVE_OFFER} from "../actions/offer_actions";


const postsReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign(nextState, { [action.post.id]: action.post })
        default:
            return state;
    }
}

export default postsReducer;