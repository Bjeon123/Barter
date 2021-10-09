import { RECEIVE_ALL_POSTS } from "../actions/post_actions";


const allPostsReducer = (state = {}, action) => {
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.allPosts;
        default:
            return state;
    }
}

export default allPostsReducer;