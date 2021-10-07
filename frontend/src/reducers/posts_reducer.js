import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";


const postsReducer = (state = {}, action) => {
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign(nextState,{[action.post.id]: action.post})
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState
        default:
            return state;
    }
}

export default postsReducer;